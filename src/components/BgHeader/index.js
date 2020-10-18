import React from "react"
import styled from "styled-components"

const BackgroundStyle = styled.div`
  display: none;

  img {
    object-fit: cover;
    position: absolute;
    z-index: -1;
    left: 40%;
    bottom: 18%;
  }

  @media (min-width: 900px) {
    display: inline;

    img {
      left: 45%;
      bottom: 40%;
    }
  }
`

const BgHeader = () => <BackgroundStyle></BackgroundStyle>

export default BgHeader
