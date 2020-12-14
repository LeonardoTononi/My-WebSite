import React, { useState } from 'react';

import {
  AboutContainer,
  Text,
  Button,
  BigPar,
  Quote,
  TextContainer,
  StyledLink,
} from './style';
import { Title, Wrapper } from '../ProjectPreview/style';
import LeoFranImg from '../../assets/me-in-london.png';

const About = () => {
  return (
    <Wrapper>
      <Title id="about" style={{ textAlign: 'center' }}>
        About Me
      </Title>
      <AboutContainer>
        <StyledLink to="/blog/nice-to-meet-you">
          <img src={LeoFranImg} />
          <TextContainer>
            <h5>Read My Story</h5>
            <p>Do you want to know more about me? Read this post.</p>
          </TextContainer>
        </StyledLink>
      </AboutContainer>
    </Wrapper>
  );
};

export default About;
