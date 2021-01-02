import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: 2rem;

  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.mint};
    opacity: 0.5;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
  }

  h4 {
    text-transform: lowercase;
  }
`
