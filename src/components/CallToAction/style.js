import styled from 'styled-components';
import { theme } from '../../constants';

export const SubscribeSection = styled.section`
  display: grid;
  position: relative;
  max-width: 1000px;
  margin: 40px 20px;
  border-radius: 15px;
  padding: 2rem;
  justify-content: start;
  align-content: center;
  box-shadow: ${({ theme }) => theme.base_shadow};

  mark {
    background: ${({ theme }) => theme.mint};
  }

  h3 {
    margin: 2rem 0;
    font-size: 2rem;
    letter-spacing: 0.05em;
  }

  h4 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 35px;
    text-transform: initial;
    font-weight: 500;
    a {
      color: rgb(29, 161, 242);
      font-weight: 800;
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    color: ${({ theme }) => theme.primary600};
    opacity: 0.5;
    padding-top: 20px;
  }

  @media only screen and (min-width: 600px) {
    margin: 4rem auto 6rem auto;
    h3 {
      margin: 0;
      font-size: 3rem;
    }

    h4 {
      font-size: 1.3rem;
      padding: 1rem 0;
    }
  }
`;

export const FollowMe = styled.a`
  text-decoration: underline;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary800};
  transition: transform 100ms ease-in-out;

  svg {
    color: rgb(29, 161, 242);
    font-size: 82px;
    transition: transform 100ms ease-in-out;
  }

  span {
    display: none;
    padding-top: 20px;
  }

  &:hover {
    svg {
      transform: scale(1.55);
    }
    span {
      display: block;
    }
  }
`;
