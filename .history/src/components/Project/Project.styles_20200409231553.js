import styled from 'styled-components';

export const ProjectContainer = styled.section`
  
`

export const Description = styled.p`
  padding: 2rem; 
  color: #61626d;
  line-height: 35px;
  font-size: 1.3rem;  
  font-weight: 200;
  text-align: start;
`

export const Tags = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    p {
      padding: 0 0.5rem;
      font-size: 1.3rem;
      text-align: center;
      border-radius: 40px;
      font-weight: 300;
    }
`

export const SocialsContainer = styled.div`
    padding: 1rem 0;
    display: inline-flex;

    a {
      width: 50px;
      height: 50px;
      color: #fff;
      background-color: #618ee924;
      margin: 0 10px;
      border-radius: 50%;
    }

    
`