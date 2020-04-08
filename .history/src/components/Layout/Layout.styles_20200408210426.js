import styled from 'styled-components'

export const LayoutContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
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