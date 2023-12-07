import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ArticleSliderSection = styled(motion.div)`
  position: relative;
  height: 100vh;
  overflow: hidden;

  .slider_slides {
    z-index: 1;
    position: relative;
    height: 100%;
    .slide {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 150vmax;
      height: 150vmax;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      transition: clip-path 0s 0.91s;
      clip-path: circle(30px at 1vw 50%);
      .slide_inner {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100vw;
        height: 100vh;
        margin-left: -50vw;
        margin-top: -50vh;
        background-size: cover !important;
        background-position: top center;
        .slide_content {
          position: absolute;
          left: 30px;
          bottom: 15%;
          z-index: 2;
          width: fit-content;

          button {
            background: none;
            height: 100px;
            width: 100px;
            border-radius: 100%;
            border: none;
            overflow: hidden;
            position: relative;
            letter-spacing: none !important;
            border: 2px solid #eae2b7;
            cursor: pointer;
            transition: background 0.5s ease;
            :hover {
              background: #eae2b7;
              transition: background 0.5s ease;
              span {
                color: #fcbf49;
              }
            }
            &:active{
              span{
                color: #f77f00;
              }
            }
            
            span {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #eae2b7;
              font-size: var(--body_text);
              line-height: var(--h5-line_height);
              letter-spacing: var(--h5-letter_spacing);
              font-weight: 900;
            }
          }
          h2 {
            font-size: var(--h3);
            line-height: 0.9;
            letter-spacing: var(--h3-letter_spacing);
            font-weight: 900;
            text-transform: uppercase;
            color: #eae2b7;
            position: relative;
            margin-bottom: 20px;
            width: 40%;
            cursor: pointer;
            &:hover {
              color: #fcbf49;
            }
            &:active{
              color: #f77f00;
            }
          }
          h5 {
            font-size: var(--h6);
            line-height: var(--h6-line_height);
            letter-spacing: 0px;
            font-weight: 900;
            text-transform: uppercase;
            color: #eae2b7;
            position: relative;
            margin-bottom: 20px;
            width: 40%;
            cursor: pointer;
            transition: letter-spacing 1s;
            :hover {
              letter-spacing: 4px;
              transition: letter-spacing 1s;
              color: #fcbf49;
            }
          }
        }
        @media screen and (max-width: 720px) {
          .slide_content {
            left: 7%;
            button {
              height: 70px;
              width: 70px;
              span {
                font-size: 14px;
              }
            }
            h5 {
              font-size: 18px;
              width: 100%;
            }
            h2 {
              font-size: 35px;
              width: 65%;
            }
          }
        }
      }
    }
  }
  .slide.active {
    z-index: 1;
    transition: clip-path 1.3s;
    clip-path: circle(100% at 50% 50%);
  }
  @-moz-document url-prefix() {
    #wrapper {
      height: 100vh;
      overflow-y: scroll;
    }
  }
`;
