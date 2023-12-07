import React, { useState } from "react";
import Link from "next/link";
import {
  ArticleSliderContainer,
  ArticleSliderSection,
  ArticleContentSlider,
  ArticleSlides,
  Slider,
  SlideInner,
} from "../../styles/articleSliderStyles";
import { useRouter } from "next/router";
import { Container } from "../../styles/globalStyles";
import { color, motion } from "framer-motion";

const ArticleSlider = ({ articles }) => {
  const length = articles.length;
  const [current, setCurrent] = useState(0);
  const [disable, setDisable] = useState(false);

  const router = useRouter();

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <ArticleSliderSection className="slider" id="wrapper"
          
    >
      <div className="slider_slides">
        {articles.map((article, index) => (
          <div
            className={current === index ? "slide active" : "slide"}
            key={index}
          >
            <div
              className="slide_inner"
              style={{ backgroundImage: `url(${article.articleImage})` }}
            >
              <div className="slide_content">
                <Link
                  href="/article/[id]"
                  as={`/article/${article.articleID}`}
                  scroll={false}
                >
                  <div style={{ width: "fit-content!important" }}>
                    <h2 className="slide_heading">{article.articleTitle}</h2>
                    <h5 style={{color: 'white'}}>READ MORE</h5>
                  </div>
                </Link>
                <button onClick={nextImage}>
                  <span style={{background: 'none'}}>
                    LOAD<br></br>MORE
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ArticleSliderSection>
  );
};

export default ArticleSlider;
