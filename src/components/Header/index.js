import React from 'react';

import { StyledHeader, StyledButton, WrapperBtn } from './style';

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

      <WrapperBtn>
        <StyledButton
          className="circleScaleBtn"
          href="/static/CV-Leonardo-Tononi-2020.pdf"
          download
          secondary
        >
          Download Resume
          <span>Updated on Dec 2020</span>
        </StyledButton>
        {/* <StyledButton className="circleScaleBtn" href="/blog" secondary>
          Read My Blog
        </StyledButton> */}
      </WrapperBtn>
    </StyledHeader>
  );
};

export default Header;
