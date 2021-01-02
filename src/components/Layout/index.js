import React, { useState } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../constants/themes';
import { useDarkMode } from '../../hooks/useDarkMode';

import Settings from '../Settings';
import Contact from '../Contact';
import Emoji from './leo-emoji.png';
import {
  LayoutContainer,
  NavContainer,
  NavList,
  StyledFooter,
  Icon,
  GlobalStyle,
} from './style';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
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
          <Settings themeToggler={toggleTheme} />
        </NavContainer>
        <main>{children}</main>

        <Contact id="contact" />
        <StyledFooter>leonardotononi@gmail.com</StyledFooter>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
