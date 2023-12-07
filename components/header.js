import React from "react";
import Link from 'next/link'
import { Container, Flex } from "../styles/globalStyles";
import { HeaderNav, Logo, MenuBtn } from "../styles/headerStyles";

const Header = ({toggleMenu, setToggleMenu}) => {
  return (
    <HeaderNav >
      <Container>
        <Flex spaceBetween alignCenter>
          <Logo><Link href='/'>FIFAZINE</Link></Logo>
          <MenuBtn onClick={() => setToggleMenu(!toggleMenu)}>
            <span>MENU</span>
          </MenuBtn>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
