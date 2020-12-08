import React from 'react';

import { StyledHeader, DownloadButton, BgPattern } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <h5>Leonardo Tononi</h5>
      <h1>
        <mark>I'm a Front-End Developer,</mark>
        <span>
          {' '}
          I feel hungry to learn every day, ready to work with my team and
          determinate to deal with every kind of problems.
        </span>
      </h1>

      <DownloadButton
        className="circleScaleBtn"
        href="/static/CV-Leonardo-Tononi-2020.pdf"
        download
      >
        Download Resume
      </DownloadButton>
    </StyledHeader>
  );
};

export default Header;
