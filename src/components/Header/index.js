import React from 'react';

import { StyledHeader, StyledButton, WrapperBtn } from './style';
import useSound from 'use-sound';

import success from './success-low.wav';

const Header = () => {
  const [play] = useSound(success);

  const delay = () => {
    setTimeout(() => play(), 500);
  };
  return (
    <StyledHeader>
      <h5>Leonardo Tononi</h5>
      <h1>
        <mark>I'm a Front-End Developer,</mark>
        <br />
        <span>
          I feel hungry to learn every day, <br /> ready to work and to deal
          with all kinds of problems.
        </span>
      </h1>

      <WrapperBtn>
        <StyledButton
          className="circleScaleBtn"
          href="./cv.pdf"
          download="cv-leonardo-tononi"
          secondary
          onClick={delay}
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
