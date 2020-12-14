import styled from 'styled-components';
import { colors } from '../../constants';

export const SubscribeSection = styled.section`
  display: grid;
  position: relative;
  max-width: 1000px;
  margin: 40px 20px;
  border-radius: 15px;
  padding: 2rem;
  justify-content: start;
  align-content: center;
  box-shadow: 6px 6px 22px #ebebeb, -6px -6px 22px #ffffff;

  mark {
    background: ${colors.mint};
  }

  h3 {
    margin: 2rem 0;
    font-size: 4rem;
    letter-spacing: 0.05em;
  }

  h4 {
    margin: 0;
    font-size: 1.4rem;
    line-height: 35px;
    text-transform: initial;
    font-weight: 500;
    span {
      color: rgb(29, 161, 242);
      font-weight: 800;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    color: #3f3d56;
    opacity: 0.5;
    padding-top: 20px;
  }

  @media only screen and (min-width: 600px) {
    margin: 4rem auto 6rem auto;
    h3 {
      margin: 0;
      font-size: 4rem;
    }

    h4 {
      font-size: 1.6rem;
      padding: 1rem 0;
    }
  }
`;

export const FollowMe = styled.div`
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

  svg {
    color: rgb(29, 161, 242);
    font-size: 32px;
  }
`;
