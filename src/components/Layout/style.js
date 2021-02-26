import styled from 'styled-components';
import { Link } from 'gatsby';
import { devices } from '../../constants';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
  }
  body {
    font-family: 'Raleway';
    color: ${({ theme }) => theme.primary800};
    background-color:  ${({ theme }) => theme.white};
    font-size: 16px;
    margin: 0;
  }

  a {
    text-decoration: none;
    box-shadow: none;
    color: ${({ theme }) => theme.primary800};
  }

  h2,h4,h5 {
    font-family: 'Raleway';
  }
  h1,h3 {
    font-family: 'Playfair Display';
  }
`;

export const LayoutContainer = styled.div`
  * {
    box-sizing: border-box;
  }
`;

export const Logo = styled.img`
  width: 60px;
`;

export const NavContainer = styled.nav`
  padding: 10px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${devices.tablet} {
    justify-content: center;
    position: relative;

    ${Logo} {
      width: 80px;
      position: absolute;
      left: 10px;
      top: 0;
    }
  }
`;

export const Icon = styled.div``;

export const NavList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0;

  a {
    list-style-type: none;
    margin: 5px;
    padding: 5px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    box-shadow: 0;
    transition: background-color 100ms ease-in-out;
    border-radius: 5px;
    color: ${({ theme }) => theme.primary800};

    &:hover {
      background-color: ${({ theme }) => theme.dirty_white};
    }
  }

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: flex-end;

    a {
      padding: 1rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.5em;
  letter-spacing: 0.05em;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  place-content: center;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
  }
`;
