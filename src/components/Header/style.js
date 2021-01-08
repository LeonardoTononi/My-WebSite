import styled from 'styled-components';
import { fonts, devices } from '../../constants/index';

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
    color: ${({ theme }) => theme.primary600};
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
      background: ${({ theme }) => theme.mint};
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
    display: grid;
    grid-auto-flow: column;
    align-items: start;
  }
`;

export const StyledButton = styled.a`
  width: 250px;
  height: 60px;
  box-shadow: ${({ secondary, theme }) => secondary && `${theme.base_shadow}`};
  background: ${({ secondary, theme }) =>
    (secondary && `${theme.white}`) ||
    (theme.value === 'dark' && `transparent`) ||
    `${theme.dirty_white}`};
  color: ${({ theme }) => theme.primary800};
  text-decoration: ${({ secondary, theme }) =>
    theme.value === 'dark' && !secondary && `underline`};
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
    color: ${({ theme }) => theme.primary200};
    font-style: italic;
    padding-top: 5px;
    opacity: 0;
    position: absolute;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.base_shadow_hover};
    background: ${({ secondary, theme }) =>
      (secondary && `initial`) || `${theme.dirty_white}`};

    span {
      opacity: 1;
      position: relative;
    }
  }

  @media ${devices.tabletM} {
    margin-top: 40px;
  }
`;
