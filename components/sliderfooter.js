import React from 'react';
import {
  FooterContainer,
  FooterIconList,
  FooterList,
  FooterListItem,
  FooterSection,
  FooterIconItem,
  Logo,
} from '../styles/sliderFooterStyles';

import Link from 'next/link';

const SlideFooter = () => {
  return (
    <FooterSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <FooterContainer>
        <Logo>
          <h4>FIFAZINE</h4>
          <br></br>
          <h5>
            FOR INQURIES:<br></br>
            GUPIGILL12@GMAIL.COM
          </h5>
        </Logo>
        <FooterList>
          <FooterListItem>
         
            <Link href="/news" passHref scroll={false}>
              <h6>NEWS</h6>
            </Link>
            <Link href="/about" passHref scroll={false}>
              <h6>About FIFA</h6>
            </Link>
          </FooterListItem>

          <FooterIconList>
            <FooterIconItem>
              <Link href="/" passHref scroll={false}>
                <i className="fab fa-twitter"></i>
              </Link>
            </FooterIconItem>
            <FooterIconItem>
              <Link href="/" passHref scroll={false}>
                <i className="fab fa-facebook"></i>
              </Link>
            </FooterIconItem>
            <FooterIconItem>
              <Link href="/" passHref scroll={false}>
                <i className="fab fa-instagram"></i>
              </Link>
            </FooterIconItem>
            <FooterIconItem>
              <Link href="/" passHref scroll={false}>
                <i className="fab fa-youtube"></i>
              </Link>
            </FooterIconItem>
          </FooterIconList>
        </FooterList>
      </FooterContainer>
    </FooterSection>
  );
};

export default SlideFooter;
