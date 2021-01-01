import React from 'react';
import styled from 'styled-components';
import { devices, colors, fonts } from '../../constants';
import { Link } from 'gatsby';
import IconIdea from '../../assets/idea.svg';

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

  mark {
    background: ${colors.mint};
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
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
    margin: 30px 0;
  }

  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
  }

  blockquote {
    background: rgba(245, 246, 197, 0.45);
    border-radius: 15px;
    margin: 60px 20px;
    max-width: 760px;
    position: relative;

    p {
      margin: 0;
      width: 100%;
      padding: 20px 30px;
    }

    svg {
      width: 20px;
    }

    :before {
      content: url(${IconIdea});
      position: absolute;
      right: -60px;
      top: -30px;
      z-index: 0;
      opacity: 0.4;
    }
  }

  .link,
  a {
    text-decoration: underline;
  }

  strong {
    font-weight: 900;
  }
`;

export const Content = styled.div`
  .gatsby-resp-image-wrapper {
    margin-top: 60px;
    max-width: 100%;
  }
`;

export const Row = styled.div`
  padding-bottom: 40px;
`;

export const BackBtn = styled(Link)`
  margin-bottom: 20px;
  border: 1px solid #d3d3de26;
  background-color: #d3d3de26;
  width: 60px;
  padding: 0 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 5px;
  transition: padding 250ms ease-in;
  position: relative;

  svg {
    opacity: 0;
    position: absolute;
    left: 20px;
    transition: left 200ms ease-in;
  }

  &:hover,
  &:active {
    box-shadow: ${colors.base_shadow};
    padding: 0 18px;

    svg {
      opacity: 1;
      left: 2px;
    }
  }
`;
