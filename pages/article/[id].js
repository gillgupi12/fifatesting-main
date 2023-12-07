import db from '../../firebase/index';
import { getDocs, collection, getDoc, doc } from 'firebase/firestore/lite';
import { Article } from '../../styles/articleStyles';
import { Container } from '../../styles/globalStyles';
import parse from 'html-react-parser';
import moment from 'moment';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Footer from '../../components/footer';

const Post = ({ article }) => {
  const { articleTitle, articleImage, articleContent, dateCreated } = article;
  const date = new Date(parseInt(dateCreated, 10));
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
    <Article
      id="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="parallax-wrapper" style={{ overflowY: 'hidden' }}>
        <div className="parallax" ref={parallaxRef}>
          <div className="title">
            <h1>{articleTitle}</h1>
            <h3> {moment(date).format('LL')}</h3>
          </div>
        </div>

        <div className="imagecontainer">
          <div className="image">
            <img
              src={articleImage}
              alt=""
              style={{ width: '100%', backgroundPosition: 'fixed' }}
            />
          </div>
        </div>

        <div className="content">
          <div className="leftcontent"></div>
          <div className="rightcontent">{parse(articleContent)}</div>
        </div>

        <Footer />
      </div>
    </Article>
  );
};

export default Post;

export async function getStaticProps({ params: { id } }) {
  const result = await getDoc(doc(db, 'articles', id));
  return {
    props: {
      article: {
        ...result.data(),
        dateCreated: result.data().dateCreated.toMillis(),
      },
    },
  };
}

export async function getStaticPaths() {
  const allArticlesRef = collection(db, 'articles');
  const result = await getDocs(allArticlesRef);
  const paths = result.docs.map((doc) => ({
    params: {
      id: doc.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
