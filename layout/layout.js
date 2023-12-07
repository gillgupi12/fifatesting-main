import React, { useState } from 'react';
import Header from '../components/header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navigation from '../components/navigation';


const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
    padding: 0;
    margin: 0;
    font: inherit;
    font-size: inherit;
    vertical-align: baseline;
    text-decoration: none;
    --h1: 9.02778vw;
    --h2: 7.63889vw;
    --h3: 4.30556vw;
    --h4: 3.47222vw;
    --h5: 3.05556vw;
    --h6: 2.08333vw;
    --body-big: 24px;
    --paragraph: 16px;
    --span: 12px;
    --body-small: 10px;
    --h1-line_height: 0.8;
    --h2-line_height: 1;
    --h3-line_height: 1;
    --h4-line_height: 1;
    --h5-line_height: 1.09;
    --h6-line_height: 1;
    --body-big-line_height: 1.4;
    --paragraph-line_height: 1.4;
    --span-line_height: 1;
    --body-small-line_height: 1;
    --h1-letter_spacing: normal;
    --h2-letter_spacing: -0.02em;
    --h3-letter_spacing: -0.02em;
    --h4-letter_spacing: normal;
    --h5-letter_spacing: normal;
    --h6-letter_spacing: normal;
    --body-big-letter_spacing: normal;
    --paragraph-letter_spacing: normal;
    --body-small-letter_spacing: normal;
    --span-letter_spacing: normal;
    --grid_columns: 12;
    --grid_gutter: 1.52778vw;
    --grid-margin: 30px;
    --grid_width: calc(100% - var(--grid-margin)*2 + var(--grid_gutter));

@media screen and (min-width: 1408px){
  --h1: 130px;
    --h2: 110px;
    --h3: 62px;
    --h4: 50px;
    --h5: 44px;
    --h6: 30px;
    --grid_columns: 16;
    --grid_gutter: 1.52778vw;
    --grid-margin: 30px;
    --grid_width: calc(100% - var(--grid-margin)*2 + var(--grid_gutter));
}
@media only screen and (max-width: 1024px){
  --grid_columns: 8;
}


@media only screen and (max-width: 720px){
  
  
      --h1: 13.88889vw;
    --h2: 12.5vw;
    --h3: 11.11111vw;
    --h4: 5.69444vw;
    --h5: 4.44444vw;
    --h6: 3.125vw;
    --body-big: 3.88889vw;
    --paragraph: 16px;
    --span: 12px;
    --body-small: 10px;
    --h1-line_height: 0.93;
    --h2-line_height: 1;
    --h3-line_height: 1;
    --h4-line_height: 1,.03;
    --h5-line_height: 1.09;
    --h6-line_height: 1;
    --body-big-line_height: 1.33;
    --paragraph-line_height: 1.4;
    --span-line_height: 1;
    --body-small-line_height: 1;
    --h1-letter_spacing: normal;
    --h2-letter_spacing: -0.02em;
    --h3-letter_spacing: -0.02em;
    --h4-letter_spacing: normal;
    --h5-letter_spacing: normal;
    --h6-letter_spacing: normal;
    --body-big-letter_spacing: normal;
    --paragraph-letter_spacing: normal;
    --body-small-letter_spacing: normal;
    --span-letter_spacing: normal;
    --grid_columns: 6;
    --grid_gutter: 24px;
    --grid-margin: 30px;
    --grid_width: calc(100% - var(--grid-margin)*2 + var(--grid_gutter));
}

  }

html{
    height: 100%;
    width: 100%;
    height: -webkit-fill-available;
}
body{
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.background};
    font-family: 'Raleway', sans-serif;
    min-height: 100dvh;
  min-height: -webkit-fill-available;
}


`;

const Layout = ({ children }) => {
  const theme = {
    background: '#003049',
    text: 'black',
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main style={{ position: 'relative', minHeight: '100dvh' }}>
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
