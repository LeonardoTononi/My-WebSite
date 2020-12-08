import styled, { keyframes } from 'styled-components';
import { devices, colors, fonts } from '../../constants';
import { Title } from '../ProjectPreview/style';

export const SkillsContainer = styled.section`
  padding: 2rem 0.5rem;
  max-width: 1920px;
  margin: 0 auto;
  margin: 60px auto;
  box-shadow: 15px 16px 22px #ececec6b, -4px -5px 22px #f7f7f77d;

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
  box-shadow: 6px 6px 22px #ebebeb8a, -6px -6px 22px #ffffff7a;
  padding: 20px;
  margin-right: 30px;
  border-radius: 20px;
  width: 120px;
  height: 120px;

  span {
    padding-top: 10px;
  }
`;
