import styled from "styled-components"
import Background from '../../assets/PlayBG.png'
export const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');

  height: 80vh;
  padding: 2rem;
  display: grid;
  place-content: center;
  background-image: url(${Background});

  h5 {
    text-transform: uppercase;
    color: #3F3D56;
    opacity: 0.5;
    font-weight: 400;
    font-size: .9rem;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 0.2em 0;
    font-size: 4rem;
    letter-spacing: 0.05em;
  }

  h4 {
    letter-spacing: 0.07em;
    font-size: 1.6rem;
    text-transform: initial;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  h4:last-of-type {
    margin-bottom: 3rem;
  }
`

export const DownloadButton = styled.div`
a {
    padding: .7rem 1rem; 
    border: 3px solid #3F3D56;
    border-radius: 15px;    
    font-weight: 600;
    letter-spacing: 0.02em;
     font-style:normal; 
     mix-blend-mode: normal;
  }
`
