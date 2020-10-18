import styled from "styled-components"
import { devices, colors, fonts } from "../../constants"

export const AboutContainer = styled.section`
  position: relative;
  padding: 0 20px;
  display: grid;
  place-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  grid-template-areas: "text1" "img" "text2";

  @media (min-width: 1400px) {
    grid-template-areas: "img" "text1" "text2";

    img {
      width: 200px;
      height: 200px;
      position: absolute;
      bottom: -8rem;
      left: -16rem;
    }
  }
`

export const Text = styled.p`
  text-align: start;
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 2rem;
  margin: 0;

  &:first-of-type {
    grid-area: text1;
  }

  &:last-of-type {
    grid-area: text2;
  }

  @media (min-width: 600px) {
    line-height: 2.7rem;
    padding-bottom: 0;
  }
`

export const ImageStyled = styled.img`
  place-self: center;
  grid-area: img;
  width: 100%;
  max-width: 400px;
  height: 320px;
  margin-bottom: 40px;
  /* filter: grayscale(1);

  &:hover {
    filter: none;
  } */
  /*  border-radius: 38% 75% 44% 98%; */

  /*   filter: drop-shadow(2px 4px 6px grey); */

  @media (min-width: 600px) {
    margin: 3rem 0;
  }
`
