import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { AboutContainer, Text, Button, BigPar, Quote } from './style';
import { Title, Wrapper } from '../ProjectPreview/style';
import { BrowserView, MobileView, isTablet } from 'react-device-detect';

const About = () => {
  return (
    <Wrapper>
      <Title id="about">About Me</Title>
      <AboutContainer>
        <MobileView>
          <MobileText />
        </MobileView>
        <BrowserView>
          <TabletText />
        </BrowserView>
      </AboutContainer>
    </Wrapper>
  );
};

export default About;

const TabletText = () => (
  <Text>
    <p>Hi there! I'm Leonardo.</p>
    <p> I'm a passionate learner that love experiment new things.</p>
    <p>
      <mark>My background</mark> is really far from tech, back to 2017 I was an{' '}
      online poker player. I know it's shocking, but I was so anti tech that I
      remember that for every kind of problem I turned off my PC (It still works
      sometimes).
    </p>
    <br></br>
    <p>
      After <mark>years of travelling ✈️</mark> around the world and thousand of
      euro won with poker I understood that money were not so important for my
      self, and that if I would achieve happiness I had to change the main focus
      in my life.
    </p>
    <br></br>
    <p>
      Therefore I started to <mark>question my self</mark> about what I was
      doing, and if was right for my soul.
    </p>
    <p>
      During this process, at the end of 2017, I started to grow an interest in
      blockchain and without have a real understanding I invested and lost some
      money.
    </p>
    <p>
      After that, if I understand something was that know about crypto it would
      happen only if I would start studying about programming from the basics
      and only then try to understand more complex concepts like crypto and
      blockchain..
    </p>
    <br></br>
    <p>
      Now here we are, I'm super happy for my decision and really excited (Ohh
      I'm so thrilled!!!) every day to <mark>learn and understand</mark> new
      tools and languages.
    </p>
  </Text>
);

const MobileText = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Text>
        {!isVisible && (
          <>
            Hi there! I'm Leonardo. I'm a passionate learner that love
            experiment new things. <mark>My background</mark> is really far from
            tech, back to 2017 I was...
          </>
        )}
        {isVisible && <TabletText />}
      </Text>
      <div>
        <Button
          onClick={async () => {
            if (isVisible === false) {
              scrollTo('#about');
            }
            await setIsVisible(!isVisible);
          }}
        >
          {(isVisible && 'Read Less') || 'Read More'}
        </Button>
      </div>
    </>
  );
};
