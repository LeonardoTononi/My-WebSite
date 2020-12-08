import styled, { keyframes } from 'styled-components';
import { devices, colors, fonts } from '../../constants';
import { Title } from '../ProjectPreview/style';

export const SkillsContainer = styled.section`
  padding: 2rem 0.5rem;
  max-width: 1920px;
  margin: 0 auto;
  background: ${colors.dirty_white};
  margin: 60px auto;

  img {
    width: 40px;
  }

  ${Title} {
    padding: 0 30px;
  }
`;

export const SkillCard = styled.div`
  display: inline-flex;
  flex-direction: column-reverse;
  align-items: center;
  box-shadow: ${colors.tiny_shadow};
  padding: 20px;
  margin-right: 30px;
  border-radius: 10px;
  width: 120px;
  height: 120px;

  span {
    padding-top: 10px;
  }
`;
