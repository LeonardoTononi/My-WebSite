import styled from 'styled-components';
import { fonts, devices, colors } from '../../constants/index';

export const StyledHeader = styled.header`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  place-content: center;

  h5 {
    margin: 0;
    text-transform: capitalize;
    color: #3f3d56;
    opacity: 0.5;
    font-weight: 400;
    font-size: ${fonts.smalltitle.mobile};
    letter-spacing: 0.08em;
    margin-bottom: 10px;
  }

  h1 {
    margin: 0;
    font-size: ${fonts.title.mobile};
    letter-spacing: 0.05em;

    mark {
      background: ${colors.mint};
    }

    span {
      font-weight: 400;
      font-size: ${fonts.subtitle.mobile};
      letter-spacing: initial;
    }
  }

  @media ${devices.tabletM} {
    padding: 30px;
    height: 70vh;
    max-height: 720px;
    padding: 60px;
    justify-content: start;
    align-content: center;
    background-image: none;

    h5 {
      font-size: ${fonts.smalltitle.tablet};
    }

    h1 {
      font-size: ${fonts.title.laptop};
      span {
        font-size: ${fonts.subtitle.mobile};
        line-height: 1rem;
      }
    }
  }
`;

export const WrapperBtn = styled.div`
  @media ${devices.tablet} {
    display: flex;
    gap: 40px;
  }
`;

export const StyledButton = styled.a`
  width: 250px;
  height: 60px;
  box-shadow: ${({ secondary }) => secondary && `${colors.base_shadow}`};
  background: ${({ secondary }) =>
    (secondary && `${colors.white}`) || `${colors.primary400}`};
  color: ${({ secondary }) =>
    (secondary && `${colors.primary}`) || `${colors.white}`};
  display: grid;
  align-items: center;
  place-content: center;
  margin: 30px 0;
  position: relative;
  transition: box-shadow 100ms ease-in-out;
  font-size: ${fonts.text.mobile};
  font-weight: bold;
  border-radius: 10px;
  text-transform: capitalize;

  span {
    font-size: 12px;
    color: #bcbcbc;
    font-style: italic;
    padding-top: 5px;
    opacity: 0;
    position: absolute;
  }

  &:hover {
    box-shadow: ${colors.base_shadow_hover};
    background: ${({ secondary }) =>
      (secondary && `initial`) || `${colors.primary}`};

    span {
      opacity: 1;
      position: relative;
    }
  }

  @media ${devices.tabletM} {
    margin-top: 40px;
  }
`;
