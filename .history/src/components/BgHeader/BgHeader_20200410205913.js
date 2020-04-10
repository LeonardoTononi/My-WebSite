import React from 'react';
import styled from 'style-components'
import Background from '../../assets/PlayBG.png'

const BackgroundStyle = styled.div`
 
`

const BgHeader = () => (
  <BackgroundStyle>
    <img src={Background} alt=""/>
  </BackgroundStyle>
)

export default BgHeader;