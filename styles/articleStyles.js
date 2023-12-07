import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Article = styled(motion.div)`
  @-moz-document url-prefix() {
    #wrapper {
      height: 100vh;
      overflow-y: scroll;
    }
  }
  height: 50%;
  .title {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
    color: #eae2b7;
    width: 100%;

    h1 {
      font-size: var(--h2);
      line-height: 0.9;
      text-align: center;
      font-weight: 800;
      width: 80%;
      text-transform: uppercase;
    }
    h3 {
      font-size: var(--h3);
      text-transform: uppercase;
      font-weight: 800;
    }
  }
  .imagecontainer {
    height: 100vh;
    width: 100%;

    .image {
      height: 100%;

      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .content {
    height: 100%;
    padding: 5vw;
    font-size: 21px;
    line-height: 1.5;

    display: flex;
    .leftcontent {
      width: 50%;
    }
    .rightcontent {
      width: 50%;
      color: #eae2b7;
    }
  }

  @media screen and (max-width: 720px) {
    .title {
      h1 {
        font-size: var(--h3);
        line-height: 1;
        text-align: center;
        width: 100%;
      }
      h3 {
        font-size: var(--h5);
        text-transform: uppercase;
      }
    }
    .content {
      flex-direction: column;
      .leftcontent {
        width: 100%;
      }
      .rightcontent {
        width: 100%;
      }
    }
  }
`;
