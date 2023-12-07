import db from '../firebase/index';
import {
  getDocs,
  collection,
  orderBy,
  query,
  limit,
} from 'firebase/firestore/lite';
import HomeFeatured from '../components/homePage/homeFeatured';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import { useEffect, useRef } from 'react';

export const getStaticProps = async (context) => {
  const featuredArticlesRef = collection(db, 'articles');
  const q = query(
    featuredArticlesRef,
    orderBy('dateCreated', 'desc'),
    limit(3)
  );
  const querySelector = await getDocs(q);
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

export default function Home({ allArticles }) {
  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
  const parallaxRef = useRef();
  const parallax = () => {
    var scrolled = window.pageYOffset;
    if (parallaxRef && parallaxRef.current) {
      var coords = scrolled * 0.4 + 'px';
      parallaxRef.current.style.transform = 'translateY(' + coords + ')';
    } 
  };
  
  function getHeight() {
    let wrapperHeight;
    wrapperHeight = `${parallaxRef.current.getBoundingClientRect().height}px`;
    document.body.style.height = wrapperHeight;
    
  }

  useEffect(() => {
    getHeight();
    window.addEventListener('scroll', throttle(parallax, 14));
    return () => window.removeEventListener('scroll', throttle(parallax, 14));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      exit={{ opacity: 0 }}
    >
      <div className="parallax-wrapper" style={{ overflowY: 'hidden' }}>
        <div className="parallax" ref={parallaxRef}>
          <HomeFeatured articles={allArticles} />
        </div>
      </div>
     
      <Footer />
    </motion.div>
  );
}
