import styled from 'styled-components';
import { devices, colors, fonts } from '../../constants';
import { Link } from 'gatsby';

export const AboutContainer = styled.section`
  position: relative;
  padding: 0 20px;
  display: grid;
  place-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;

  img {
    max-width: 620px;
    width: 100%;
    border-radius: 15px;
    place-self: start;
    box-shadow: 6px 6px 22px #ebebeb8a, 8px 11px 10px #eeeeee21;
    transition: filter 300ms ease-in-out, transform 300ms ease-in-out;
    transform: scale(0.9);
    filter: grayscale(40%);
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 6px 6px 22px #ebebeb8a, 8px 11px 10px #eeeeee21;
  width: 90%;
  margin: 0 auto;
  position: relative;
  bottom: 60px;
  background: white;
  transform: scale(0.9);
  transition: transform 300ms ease-in-out;

  p {
    font-size: ${fonts.text.mobile};
    color: #423a3a;
  }

  h5 {
    font-size: ${fonts.text.laptop};
    font-weight: bold;
    margin: 0;
  }

  @media ${devices.tablet} {
    padding: 30px;
  }
`;

export const StyledLink = styled(Link)`
  &:hover,
  &:active {
    h5 {
      text-decoration: underline;
    }
    img {
      filter: grayscale(0);
      transform: scale(1);
    }

    ${TextContainer} {
      transform: scale(1);
    }
  }
`;

export const Text = styled.div`
  text-align: start;
  font-weight: 200;
  font-size: ${fonts.text.mobile};
  line-height: 2rem;
  margin: 0;

  mark {
    background: ${colors.mint};
  }

  @media (min-width: 600px) {
    padding-bottom: 0;
    line-height: 2.5rem;
  }

  p {
    margin: 0;
  }
`;

export const BigPar = styled.p`
  font-size: ${fonts.text.laptop};
  margin: 0;
`;

export const Quote = styled.p`
  font-size: 28px;
  margin: 30px 15px !important;
  line-height: 3.3rem;
  color: #423a3a;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  background: #ffffff;
  display: grid;
  align-items: center;
  place-content: center;
  margin: 30px 0;
  position: relative;
  font-size: ${fonts.text.base};
  border-radius: 5px;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  outline: none;

  @media ${devices.tabletM} {
    margin-top: 40px;
  }
`;
