import { motion } from "framer-motion";
import styled from "styled-components";

export const PageHeadingTitle = styled(motion.div)`
  display: flex;
  color: #EAE2B7;
  height: 144px;
  padding: 0 30px;
  margin-bottom: 36px;
  align-items: center;
  position: relative;
  
  

  h1 {
    font-size: var(--h2);
    line-height: 1;
    text-align: left;
    font-weight: 900;
  }
  @media screen and (max-width: 720px){
    height: 72px;
    h1 {
    font-size: var(--h3);
    line-height: 1;
    text-align: left;
    font-weight: 900;
  }
  }
`;
