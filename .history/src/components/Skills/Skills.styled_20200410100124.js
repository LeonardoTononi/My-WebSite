import styled from 'styled-components'

export const SkillsContainer = styled.section`
  padding: 4rem 0.5rem; 
  background-color: #F2F3F5;

  ul {
    display: flex;
    overflow-x: auto; 
    flex-wrap: nowrap;
    align-items: center;

    &::-webkit-scrollbar {
  width: 1em;
}
 
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
&::-webkit-scrollbar-thumb {
  background-color: black;
  outline: 1px solid slategrey;
}

    li {
      list-style-type: none;
      margin: 0 1rem;
      flex: 0 0 auto;
      font-size: 1.4rem;
      text-align: center;
      font-weight: 300;
    }
  }
`