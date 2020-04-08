import styled from 'styled-components'
import { Link } from "gatsby"

export const LayoutContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: #3F3D56; 
  }
`

export const NavContainer = styled.nav`
  padding: 1rem;
`
export const NavList = styled.ul`
  
  display: flex;
  justify-content: space-around;

  li {
    list-style-type: none;
  }
`

export const StyledLink = styled(Link)`
 text-decoration: none;
 box-shadow: none;
`