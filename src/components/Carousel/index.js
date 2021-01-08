import React from 'react';
import styled from 'styled-components';

const StyledSwiper = styled.div`
  overflow: scroll hidden;
  white-space: nowrap;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Carousel = ({ children }) => {
  return <StyledSwiper>{children}</StyledSwiper>;
};

export default Carousel;
