import styled from 'styled-components';
import { devices, fonts } from '../../constants';

export const UlWrapper = styled.ul`
  display: ${({ isVisible }) => (isVisible && 'grid') || 'none'};
  place-items: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  z-index: 9999;
`;

export const Item = styled.li`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.primary400};
  border: none;
  border-radius: 5px 0 0 5px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  position: fixed;
  bottom: 40px;
  right: 0;
  z-index: 9999;

  button {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.primary800};
    color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 5px 0 0 5px;
    outline: ${({ theme }) => theme.mint};
    cursor: pointer;
  }

  svg {
    font-size: 24px;
  }

  @media ${devices.tablet} {
    position: absolute;
    grid-auto-flow: column;
    top: 30px;

    ${UlWrapper} {
      grid-auto-flow: column;
      padding-right: 10px;
      display: grid;
    }

    button {
      display: none;
      border-radius: 5px;
      /* background-color: ${({ theme }) => theme.dirty_white};
      color: ${({ theme }) => theme.primary800}; */
    }

    ${Item} {
        background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.primary800};
      border-radius: 5px;

      &:hover, &:active{
        background-color: ${({ theme }) => theme.dirty_white};
      }
    }
  }
`;
