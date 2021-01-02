import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: 2rem;

  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.mint};
    opacity: 0.5;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.05em;
  }

  h1 {
    font-size: 2.5rem;
  }

  h4 {
    text-transform: lowercase;
  }
`
