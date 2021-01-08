import styled, { keyframes } from 'styled-components';
import { devices, fonts } from '../../constants';
import { Title } from '../ProjectPreview/style';

export const SkillsContainer = styled.section`
  padding: 2rem 0.5rem;
  max-width: 1920px;
  margin: 0 auto;
  margin: 60px auto;
  background: ${({ theme }) => theme.primary100};
  //box-shadow: ${({ theme }) => theme.base_shadow_light};

  img {
    width: 40px;
  }

  ${Title} {
    padding: 0 30px;
    text-align: end;
  }
`;

export const SkillCard = styled.div`
  display: inline-flex;
  flex-direction: column-reverse;
  align-items: center;
  box-shadow: ${({ theme }) => theme.base_shadow_light};
  background: ${({ theme }) => theme.white};
  padding: 20px;
  margin-right: 30px;
  border-radius: 20px;
  width: 120px;
  height: 120px;

  span {
    padding-top: 10px;
  }
`;
