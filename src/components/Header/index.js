import React from 'react';

import { StyledHeader, DownloadButton } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <h5>Leonardo Tononi</h5>
      <h1>
        <mark>I'm a Front-End Developer,</mark>
        <br />
        <span>
          I feel hungry to learn every day, <br /> ready to work and determinate
          to deal with every kind of problems.
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
