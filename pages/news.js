import React, { useEffect, useRef, useState } from 'react';
import db from '../firebase/index';
import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite';
import { SliderContainer } from '../styles/SliderStyles';
import SlideFooter from '../components/sliderfooter';
import Link from 'next/link';
import ArticleCardGallery from '../components/Article/ArticleCardGallery';
import { EmptySpace } from '../styles/globalStyles';
import PageHeading from '../components/Heading/Heading';
import { motion } from 'framer-motion';


export const getStaticProps = async (context) => {
  const first = query(collection(db, 'articles'), orderBy('dateCreated', 'desc'))
  const querySelector = await getDocs(first);
  const allArticles = querySelector.docs.map((doc) => {
    return {
      ...doc.data(),
      articleID: doc.id,
      dateCreated: doc.data().dateCreated.toMillis(),
    };
  });

  return {
    props: { allArticles },
    revalidate: 500
  };
};

const News = ({ allArticles }) => {
  const [width, setWidth] = useState();
  let sliderWidth;
  let imageWidth;
  let ease = 0.075;
  let current = 0;
  let target = 0;
  const sliderRef = useRef();
  const imagesRef = useRef([]);
 

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function setTransform(el, transform) {
    el && (el.style.transform = transform);
  }

  useEffect(() => {
    function init() {
      setWidth(window.innerWidth);
      if (sliderRef && sliderRef.current) {
        sliderWidth = sliderRef.current.getBoundingClientRect().width;
        imageWidth = sliderWidth / 7;
        document.body.style.height = `${
          sliderWidth - (window.innerWidth - window.innerHeight)
        }px`;

        animate();
      } else {
        sliderWidth = '';
        return;
      }
    }

    function animate() {
      current = parseFloat(lerp(current, target, ease)).toFixed(2);
      target = window.scrollY;
      setTransform(sliderRef.current, `translateX(-${current}px)`);
      animateImages();
      requestAnimationFrame(() => animate());
    }

    function animateImages() {
      let ratio = current / imageWidth;
      let intersectionRatioValue;
      imagesRef.current.forEach((image, index) => {
        intersectionRatioValue = ratio - index * 0.5;
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);
      });
    }

    init();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  const sliderContent = width < 720 ? (
    <>
      <EmptySpace />
      <PageHeading title={'LATEST NEWS'} />
      <ArticleCardGallery articles={allArticles} />
    </>
  ) : (
    <SliderContainer>
      <div className="slider" ref={sliderRef}>
        <div className="slider_inner">
          {allArticles.map((article, index) => (
            <Link
              href="/article/[id]"
              as={`/article/${article.articleID}`}
              key={article.articleID}
              scroll={false}
            >
              <div className="articlebox">
                <div
                  className="imgcontainer"
                  style={{ backgroundImage: `url(${article.articleImage})` }}
                  ref={(el) => (imagesRef.current[index] = el)}
                ></div>
                <div className="title">
                  <h3>{article.articleTitle}</h3>
                </div>
              </div>
            </Link>
          ))}
          <div className="footer">
            <SlideFooter />
          </div>
        </div>
      </div>
    </SliderContainer>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {sliderContent}
    </motion.div>
  );
};

export default News;