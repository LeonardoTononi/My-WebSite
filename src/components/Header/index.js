import React from 'react';

import { StyledHeader, StyledButton, WrapperBtn } from './style';
import useSound from 'use-sound';
import Cv from './cv.pdf';
import success from './pop.wav';

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
          href={Cv}
          download="cv-leonardo-tononi"
          secondary
          onClick={delay}
        >
          Download Resume
          <span>Updated on Jan 2021</span>
        </StyledButton>
        <StyledButton className="circleScaleBtn" href="/blog" primary>
          Read My Blog
        </StyledButton>
      </WrapperBtn>
    </StyledHeader>
  );
};

export default Header;
