import React from 'react';

import { SubscribeSection, FollowMe } from './style';
import { SiTwitter } from 'react-icons/si';

export const CallToAction = () => (
  <SubscribeSection>
    <h3>Don't forget...</h3>
    <h4>
      You can follow me on{' '}
      <a href="https://twitter.com/_Easaaa_" target="_blank">
        Twitter
      </a>
      , sometimes I write something meaningful.
    </h4>
    <p>Thanks for reading.</p>
    <FollowMe href="https://twitter.com/_Easaaa_" target="_blank">
      <SiTwitter />
      Follow Me @_Easaaa_
    </FollowMe>
  </SubscribeSection>
);
