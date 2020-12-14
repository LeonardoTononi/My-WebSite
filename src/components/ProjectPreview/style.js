import styled from 'styled-components';
import { devices, colors, fonts } from '../../constants';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  padding-bottom: 30px;

  @media ${devices.tablet} {
    padding-bottom: 90px;
  }
`;

export const ProjectsPreview = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  button {
    background-color: transparent;
    border: 0;
    outline: none;
  }
`;

export const StyledImg = styled(Img)`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  cursor: pointer;

  @media ${devices.tablet} {
    max-height: 400px;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  transform: scale(0.95);
  transition: transform 100ms ease;

  span {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -100px;
    width: 200px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: white;
    z-index: 1;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 100ms ease-in 25ms;
  }

  &:hover {
    transform: scale(1);
    span {
      display: inline-flex;
      opacity: 1;
    }

    ${StyledImg} {
      box-shadow: ${colors.base_shadow};
    }
  }
`;

export const Title = styled.h3`
  max-width: 900px;
  margin: 0 auto;
  font-size: ${fonts.subtitle.tablet};
  text-align: start;
  padding: 30px 20px;
  width: 100%;
`;
