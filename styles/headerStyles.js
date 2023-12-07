import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderNav = styled(motion.div)`
  display: block;
  position: relative;
  top: 72px;
  left: 0px;
  height: 0px;
  z-index: 99;
  padding: 0 30px;
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
    font-size: 30px;
    text-transform: uppercase;
    color: #eae2b7;
    font-weight: 700;
    &:hover {
      color: #fcbf49;
    }
    &:active {
      color: #f77f00;
    }
  }
  @media screen and (max-width: 720px) {
    a {
      font-size: 25px;
    }
  }
`;

export const MenuBtn = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  span {
    color: #eae2b7;
    font-size: 30px;
    font-weight: 700;
    &:hover {
      color: #fcbf49;
    }
    &:active {
      color: #f77f00;
    }
  }
  @media screen and (max-width: 720px) {
    span {
      font-size: 25px;
    }
  }
`;
