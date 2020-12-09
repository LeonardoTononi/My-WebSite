import styled from 'styled-components';
import { devices, colors, fonts } from '../../constants';
import Popup from 'reactjs-popup';
import Img from 'gatsby-image';

export const ProjectContainer = styled.section`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  place-content: start;

  h5 {
    margin: 0;
    text-transform: capitalize;
    color: #3f3d56;
    opacity: 0.5;
    font-weight: 400;
    font-size: ${fonts.smalltitle.mobile};
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

  h3 {
    font-size: ${fonts.subtitle.mobile};
    margin: 0;
    padding: 60px 0 40px 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0 0 20px 40px;
    grid-gap: 10px;

    li {
      align-items: center;
      font-size: ${fonts.text.mobile};
      line-height: 2rem;

      svg {
        font-size: 14px;
        margin-right: 10px;
      }
    }

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  ol {
    display: grid;
    padding: 20px 0 0 40px;
    grid-gap: 10px;
    line-height: 2rem;
    font-size: ${fonts.text.mobile};

    li {
      align-items: center;
      font-size: ${fonts.text.mobile};
      line-height: 2rem;
    }
  }

  p {
    line-height: 2rem;
    font-size: ${fonts.text.mobile};
  }

  img {
    width: 100%;
    max-width: 600px;
    max-height: 300px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
    margin: 30px 0;
  }

  blockquote {
    border: 2px solid #2c2c32;
    border-radius: 15px;
    margin: 60px 45px;
    max-width: 760px;

    p {
      margin: 0;
      width: 100%;
      padding: 20px;
    }
  }
`;

export const Content = styled.div`
  .gatsby-resp-image-wrapper {
    margin-top: 60px;
    max-width: 100%;
  }
`;

export const Row = styled.div`
  padding: 40px 0;
`;
