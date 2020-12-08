import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { RiLinkedinLine } from 'react-icons/ri';
import {
  ContactContainer,
  SocialLinkContainer,
  SocialLink,
  ResumeButton,
} from './style';
import { Title } from '../ProjectPreview/style';

const Contact = ({ id }) => {
  return (
    <ContactContainer id={id}>
      <Title style={{ padding: '0' }}>How to contact me</Title>
      <p>
        Currently <strong>I'm working</strong> for a company in Barcelona, but
        I'm <mark>available for freelancing</mark> jobs. <br />
        <br /> If you think I would be a good fit for you, send me an email.
      </p>
      {/*  <ResumeButton href="/static/CV-Leonardo-Tononi-2020.pdf" download>
        Download Resume
      </ResumeButton> */}
      <SocialLinkContainer>
        <SocialLink>
          <a href="mailto:leonardotononi@gmail.com">
            <BsEnvelope />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://github.com/Easaaa" target="_blank">
            <FiGithub />
          </a>
        </SocialLink>
        <SocialLink>
          <a
            href="https://www.linkedin.com/in/leonardo-tononi/"
            target="_blank"
          >
            <RiLinkedinLine />
          </a>
        </SocialLink>
      </SocialLinkContainer>
    </ContactContainer>
  );
};

export default Contact;
