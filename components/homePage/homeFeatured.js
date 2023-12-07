import React from "react";
import { FeaturedContent } from "../../styles/homepageStyles";
import ArticleSlider from "../Article/ArticleSlider";

const HomeFeatured = ({ articles }) => {
  return (
    
      <ArticleSlider articles={articles} />
   
  );
};

export default HomeFeatured;
