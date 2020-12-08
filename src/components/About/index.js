import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { AboutContainer, Text, Button } from './style';
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
    Hi there! I'm Leonardo. I'm a passionate learner that love experiment new
    things. <mark>My background</mark> is really far from tech, back to 2017 I
    was an <mark>online poker player.</mark> I was so anti tech that I remember
    a day where while I was playing poker the PC turned off unexpectedly, I was
    so furious that to fix that I was punching the case 😂. Don't worry, now I
    practice meditation since a while, I'm more <mark> quiet and calm 🧘.</mark>
    <br></br> <br></br>
    After <mark>years of travelling ✈️</mark> around the world and thousand of
    euro won with poker I understood that money were not so important to achieve
    happiness in my life. Therefore I started to <mark>question my self</mark>{' '}
    about what I was doing, and if was right for my soul. <br></br> At the end
    of 2017, I started to grow an interest in blockchain and cryptocurrencies ₿.
    Obviously I didn't understand at all how all the thing was working but I
    invested and lost some money anyway. Then I thought it was better start{' '}
    <mark>studying programming</mark> from the basics and only try to understand
    more complex concepts like crypto and blockchain.
    <br></br>
    <br></br>
    Now here we are, I'm super happy for my decision and really excited every
    day to <mark>learn and understand</mark> new subject.
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
