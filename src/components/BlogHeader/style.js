import styled from 'styled-components';

export const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');

  max-width: 1020px;
  margin: 0 auto;
  display: grid;
  place-content: center;
  padding: 20px;

  mark {
    background-color: #ceffbb;
  }

  @media (min-width: 900px) {
    height: 40vh;
    justify-content: start;
    align-content: center;
    background-image: none;
  }

  h5 {
    margin: 0;
    text-transform: capitalize;
    color: #3f3d56;
    opacity: 0.5;
    font-weight: 400;
    font-size: 1rem;

    @media (min-width: 600px) {
      font-size: 1.1rem;
    }
  }

  h1 {
    margin: 0;
    font-size: 4rem;
    letter-spacing: 0.05em;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
  }

  h4 {
    margin: 0;
    letter-spacing: 0.07em;
    font-size: 1.2rem;
    text-transform: initial;
    font-weight: 400;
    line-height: 2rem;

    @media (min-width: 600px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
      margin-top: 20px;
    }
  }

  p {
    font-size: 1rem;
    letter-spacing: 0.05em;
    color: #3f3d56;
    opacity: 0.5;
    margin: 0;
  }
`;
