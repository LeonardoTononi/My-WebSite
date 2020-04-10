import styled from 'styled-components'

export const ContactContainer = styled.section`
  padding: 2rem;
  display: grid;
  place-items: center;
  max-width: 900px;
  margin: 0 auto;

  p {
    color: #61626d;
    padding-bottom: 2rem;
    text-align: start;
    font-weight: 200;
    line-height: 35px;
    font-size: 1.3rem;
  }
`

export const SocialLinkContainer = styled.div`
   display: flex;
   width: 100%;
`

export const SocialLink = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 1.5rem;
  font-size: 1.3rem;
  display: grid;
  place-content: center;
  margin: 1.3rem 0;
  background-color: #F3F3F3;
  border-radius: 10px;

  @media (min-width: 600px) {
    grid-template-rows: 1fr
  }
`