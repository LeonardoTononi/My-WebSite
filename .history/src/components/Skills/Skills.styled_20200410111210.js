import styled, { keyframes } from 'styled-components'

 export const SkillsContainer = styled.section`
  padding: 4rem 0.5rem; 
  background-color: #F2F3F5;

  ul {
    display: flex;
    overflow-x: auto; 
    flex-wrap: nowrap;
    align-items: center;

    li {
      width: 90px;
      height: 90px;
      list-style-type: none;
      margin: 0 1rem;
      flex: 0 0 auto;
      font-size: 1.4rem;
      align-items: center;
      font-weight: 300;
      display: flex;

      img {
        width: 35px;
        position: relative; 
        top: 8px;
      }
    }
  }
` 
