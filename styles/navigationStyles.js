import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: #D62828;
  z-index: 999;
  transition: left 1s ease;
`;

export const NavHeader = styled.div`
  display: block;
  position: relative;
  top: 72px;
  left: -100%;
  height: 0px;
  z-index: 99;
`;

export const Logo = styled.div`
  font-size: 30px;
`;

export const CloseMenu = styled.div`
  font-size: 30px;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 30px;

  a {
    color: #EAE2B7;
    font-size: 60px;
    line-height: 1;
    font-weight: 900;
    display: inline-block;

    &:hover {
      color: #003049;
    }
  }
  @media screen and (max-width: 720px) {
    justify-content: flex-start;
    position: relative;
    top: 150px;

    a {
      font-size: 30px;
    }
  }
`;
