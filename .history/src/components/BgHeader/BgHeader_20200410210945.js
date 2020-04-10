import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/PlayBG.png'

const BackgroundStyle = styled.div`
  display: none;  

  img {
    object-fit: cover;
  }
  
  @media (min-width: 600px) {
    display: inline;
    position: absolute;
    z-index: -1;
    left: 40%;
    bottom: 150px;
    width: 100%;
  }
`

const BgHeader = () => (
  <BackgroundStyle>
    <img src={Background} alt=""/>
  </BackgroundStyle>
)

export default BgHeader;