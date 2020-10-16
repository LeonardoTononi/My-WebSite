import styled from "styled-components"
import { devices, colors, fonts } from "../../constants"
import Popup from "reactjs-popup"

export const ProjectContainer = styled.section`
  max-width: 1200px;
  padding: 10px;
  display: grid;
  place-content: center;
  /* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); */
  transition: background-color 100ms ease-in-out;

  @media ${devices.tablet} {
    grid-template-rows: 1fr 2fr;
    grid-gap: 20px;
    padding: 20px;
  }
`

export const ProjectImg = styled.img`
  width: 100%;
  max-width: 500px;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 20px 20px 60px #d7d7d7, -20px -20px 60px #ffffff;
  border: 4px solid #f4f4f4;
`

export const PersonalImg = styled.img`
  display: none;

  @media ${devices.tabletM} {
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 180px;
  }
`

export const Wrapper = styled.div`
  padding-bottom: 30px;

  @media ${devices.tablet} {
    padding-bottom: 90px;
  }
`

export const ProjectsPreview = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  button {
    background-color: transparent;
    border: 0;
    outline: none;
  }

  img {
    width: 100%;
    max-height: 240px;
    object-fit: cover;
    object-position: center;
    margin: 10px 0;
    border-radius: 10px;
    cursor: pointer;
  }

  @media ${devices.tablet} {
    img {
      max-height: 300px;
    }
  }
`

export const ColumnMedia = styled.div`
  text-align: center;
`

export const Title = styled.h3`
  max-width: 900px;
  margin: 0 auto;
  font-size: ${fonts.subtitle.tablet};
  text-align: start;
  padding: 30px 20px;
  width: 100%;
`

export const ColumnText = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 30px 10px;

  @media ${devices.tabletM} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Question = styled.div`
  h4 {
    font-size: ${fonts.subtitle.mobile};
    background: ${colors.mint};
    display: initial;
    margin: 0;
  }

  ul {
    display: grid;
    padding: 0 0 0 10px;
    grid-gap: 10px;
    font-size: ${fonts.text.mobile};
    list-style: none;

    li {
      display: inline-flex;
      align-items: center;

      svg {
        font-size: 14px;
        margin-right: 10px;
      }
    }

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  p {
    font-size: ${fonts.text.mobile};
    line-height: 2rem;
  }
`

export const CloseBtn = styled.button`
  outline: none;
  background: white;
  border-radius: 10px;
  border: none;

  height: 25px;
  width: 60px;

  position: absolute;
  top: 30px;
  right: 25px;
  font-size: ${fonts.text.mobile};
  color: ${colors.primary};
  font-family: "Raleway";
  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  @media ${devices.tablet} {
    box-shadow: ${colors.base_shadow};
    font-size: ${fonts.text.tablet};
    height: 35px;
    width: 90px;
  }
`

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background: #f4f4f4;
  }
  // use your custom style for ".popup-content"
  &-content {
    width: 100%;
    max-width: 900px;
    border-radius: 40px;
    background: #f4f4f4;
    box-shadow: 9px 11px 22px 12px #ebebeb, -11px -9px 22px 11px #ffffff;
    border: 0;
    height: 100%;
    max-height: 750px;
    overflow: scroll;

    @media ${devices.tabletM} {
      margin: auto 20px !important;
    }
  }
`
