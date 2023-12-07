import React from "react";
import {
  NewsContainer,
  NewsContainerSection,
  NewsRow,
} from "../../styles/articleCardGalleryStyles";
import Link from "next/link";
import moment from "moment";


const ArticleCardGallery = ({ articles }) => {
  return (
    <NewsRow>
      {articles.map((article, index) => {
        const { articleID, articleTitle, articleImage, dateCreated } = article;
        const date = new Date(parseInt(dateCreated, 10));
        const value = index + 1;
        return (
          <NewsContainerSection key={index}>
            <NewsContainer>
              <Link href="/article/[id]" as={`/article/${articleID}`} scroll={false}>
                <div className="pointer">
                  <h6>
                    [{`${value}`}] {articleTitle}
                  </h6>
                  <div className="lazymedia">
                    <img src={articleImage} alt="testing" />
                    <div className="placeholder"></div>
                  </div>
                </div>
              </Link>
              <div className="details">
                <h6>Author</h6>
                <h6>{moment(date).format("L")}</h6>
              </div>
            </NewsContainer>
          </NewsContainerSection>
        );
      })}
    </NewsRow>
  );
};

export default ArticleCardGallery;
