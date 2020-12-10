import styled from 'styled-components';

export const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');

  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: grid;
  place-content: center;
  border-radius: 10px;
  background: #d3d3de26;

  @media (min-width: 900px) {
    padding: 2rem 3rem;
    margin: 2rem auto 1rem auto;
    justify-content: start;
    align-content: center;
  }

  h5 {
    text-transform: capitalize;
    color: #3f3d56;
    opacity: 0.5;
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    margin: 0;

    @media (min-width: 600px) {
      font-size: 1.1rem;
    }
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 0.05em;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const Tags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  padding: 5px 8px;
  background: ${props => (props.coding ? '#ddddff' : '#ffc4c4')};
  border-radius: 5px;
  margin: 1rem 0.4rem 1rem 0;
  font-size: 0.9rem;
`;
