import styled from "styled-components"
import { Link } from "gatsby"
import { devices, fonts, colors } from "../../constants"

export const LayoutContainer = styled.div`
  * {
    box-sizing: border-box;
  }
`

export const NavContainer = styled.nav`
  padding: 10px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    width: 60px;
  }
  @media ${devices.tablet} {
    img {
      width: 100px;
    }
  }
`

export const Icon = styled.div``

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0;

  li {
    list-style-type: none;
    margin: 5px;
    padding: 5px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    box-shadow: 0;
    transition: box-shadow 100ms ease-in-out;
    border-radius: 5px;

    &:hover {
      box-shadow: ${colors.base_shadow};
    }
  }

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: flex-end;

    li {
      padding: 1rem;
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
`

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.5em;
  letter-spacing: 0.05em;
  text-align: center;
  font-weight: bold;
  font-size: ${fonts.text.mobile};
`