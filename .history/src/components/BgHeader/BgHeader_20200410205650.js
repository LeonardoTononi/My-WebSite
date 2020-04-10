import React from 'react';
import styled from 'style-components'
import Background from '../../assets/PlayBG.png'

const BackgroundStyle = styled.div`
 background-image: url(${Background});
  background-size: cover;
`

const BgHeader = () => (
  <BackgroundStyle />
)

export default BgHeader;