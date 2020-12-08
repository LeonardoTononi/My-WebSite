import styled from 'styled-components';

export const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');

  height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  place-content: center; /* 
	background-size: cover; */

  mark {
    background-color: #ceffbb;
  }

  @media (min-width: 900px) {
    height: 50vh;
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
    font-size: 0.9rem;
    letter-spacing: 0.08em;

    @media (min-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    margin: 0;
    font-size: 4rem;
    letter-spacing: 0.05em;

    @media (min-width: 600px) {
      font-size: 6rem;
    }
  }

  h4 {
    margin: 0;
    letter-spacing: 0.07em;
    font-size: 1.2rem;
    text-transform: initial;
    font-weight: 400;

    @media (min-width: 600px) {
      font-size: 2rem;
      line-height: 2.8rem;
      margin-top: 30px;
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
