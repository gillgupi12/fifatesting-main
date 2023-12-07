import styled from "styled-components";
import { motion } from "framer-motion";

export const NewsRow = styled(motion.div)`
  display: flex;
  margin: 0px auto;
  width: var(--grid_width);
  padding: 0px;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 42vw;

  @media screen and (max-width: 720px){
    padding: 0 15px;
  }
`;

export const NewsContainerSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #EAE2B7;
  text-decoration: none !important;
  width: calc(100% / var(--grid_columns) * 4 - var(--grid_gutter));
  margin-left: calc(var(--grid_gutter) * 0.5);
  margin-right: calc(var(--grid_gutter) * 0.5);

  @media screen and (max-width: 720px) {
    width: calc(100% / var(--grid_columns) * 12 - var(--grid_gutter));
    margin-bottom: 10vw;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const NewsContainer = styled(motion.div)`
  margin-bottom: 2vw;
  margin-top: 1vw;

  .pointer {
    cursor: pointer;
    text-overflow: ellipsis;
    hyphens: auto;

    h6 {
      font-size: 21px;

      line-height: 1;
      letter-spacing: var(--h6-letter_spacing);
      font-weight: 300;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: left;
      overflow: hidden;
      margin-bottom: 20px;
      hyphens: auto;
    }
  }
  .lazymedia {
    overflow: hidden !important;
    display: block;
    position: relative;
    padding-top: 140% !important;
    /* filter: sepia(50%) contrast(100%) saturate(150%) brightness(80%)
      hue-rotate(-15deg); */
    filter: grayscale(1);

    img {
      position: absolute;
      object-fit: cover;
      pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* filter: sepia(50%) contrast(100%) saturate(150%) brightness(80%)
        hue-rotate(-15deg); */

      z-index: 99;
      &:hover {
        filter: none;
        z-index: 2;
      }
    }
    &:hover {
      filter: none;
      z-index: 2;
    }
    .placeholder {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: #dededc;
      z-index: 1;
      pointer-events: none;
    }
  }

  .details {
    margin-top: 20px;

    h6 {
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      color: whitesmoke;
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: 720px) {
    h4 {
      font-size: var(--h3);
      letter-spacing: var(--h3-letter_spacing);
      line-height: var(--h3-line_height);
      margin-bottom: 10px;
      word-wrap: break-word;
      word-break: break-word;
      hyphens: auto;
      text-transform: uppercase;
      line-height: 0.9;
      color: whitesmoke;
      text-align: left;
      font-weight: 600;
    }
  }
`;
