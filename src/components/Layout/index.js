import React from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { createGlobalStyle } from 'styled-components';
import { colors } from '../../constants';

import Contact from '../Contact';

import Emoji from './leo-emoji.jpg';
import {
  LayoutContainer,
  NavContainer,
  NavList,
  StyledFooter,
  Icon,
} from './style';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
  }
  body {
    font-family: 'Raleway';
    color: ${colors.primary};
    font-size: 16px;
  }

  a {
    text-decoration: none;
    box-shadow: none;
    color: ${colors.primary};
  }

  h2,h4,h5 {
    font-family: 'Raleway';
  }
  h1,h3 {
    font-family: 'Playfair Display';
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <NavContainer>
        <Icon>
          <img src={Emoji} />
        </Icon>
        <NavList>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <a onClick={() => scrollTo('#contact')}>Contact</a>
        </NavList>
      </NavContainer>
      <main>{children}</main>
      <Contact id="contact" />
      <StyledFooter>leonardotononi@gmail.com</StyledFooter>
    </LayoutContainer>
  );
};

export default Layout;
