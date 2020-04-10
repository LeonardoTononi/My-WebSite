import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/PlayBG.png'

const BackgroundStyle = styled.div`
  position: absolute;
  z-index: -1
`

const BgHeader = () => (
  <BackgroundStyle>
    <img src={Background} alt=""/>
  </BackgroundStyle>
)

export default BgHeader;