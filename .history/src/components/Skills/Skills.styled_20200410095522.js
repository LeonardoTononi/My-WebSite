import styled from 'styled-components'

export const SkillsContainer = styled.section`
  padding: 1rem;
  background-color: #F2F3F5;

  ul {
    display: flex;
    align-items: center;
    overflow: auto; 
    white-space: nowrap;

    li {
      list-style-type: none;
      margin: 0 1rem;
      display: inline-block;
    }
  }
`