import styled, { keyframes } from 'styled-components'

 export const SkillsContainer = styled.section`
  padding: 2rem 0.5rem; /* 
  background-color: #F2F3F5; */
  max-width: 1700px;
  margin: 0 auto;

  ul {
    display: grid;
    align-items: center;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr));

    li {
      list-style-type: none;
      position: relative;
      margin: 0 2rem;
      font-size: 1.4rem;
      align-items: center;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &:hover span {
        display: inline;
      }

      span {
        display: none;
        position: absolute;
        top: 5rem;
      }


      img {
        margin: 1em;
        width: 35px;
        height: 60px;
        position: relative; 
        top: 8px;
      }
    }
  }
` 
