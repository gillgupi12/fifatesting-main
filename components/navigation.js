import Link from 'next/link';
import React from 'react';
import { NavHeader, NavMenu, CloseMenu, Nav } from '../styles/navigationStyles';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav, MenuBtn, Logo } from '../styles/headerStyles';


const Navigation = ({ toggleMenu, setToggleMenu }) => {
  return (
    <Nav initial={{ x: "100%" }}
    exit={{ x: "100%" }}
    animate={{ x: toggleMenu ? 0 : "100%" }}
    transition={{ duration: 0.5}}>
      <HeaderNav>
        <Container>
          <Flex spaceBetween alignCenter>
            <Logo>
              <Link href="/">
              FIFAZINE
              </Link>
            </Logo>
            <MenuBtn onClick={() => setToggleMenu(!toggleMenu)}>
              <span>CLOSE</span>
            </MenuBtn>
          </Flex>
        </Container>
      </HeaderNav>
      <Container>
        <NavMenu>
          <Link href="/news" onClick={() => setToggleMenu(!toggleMenu)}>
            <div onClick={() => setToggleMenu(!toggleMenu)}>NEWS</div>
          </Link>
          <Link href="/about" onClick={() => setToggleMenu(!toggleMenu)}>
            <div onClick={() => setToggleMenu(!toggleMenu)}>ABOUT FIFA</div>
          </Link>
          
        </NavMenu>
      </Container>
    </Nav>
  );
};

export default Navigation;
