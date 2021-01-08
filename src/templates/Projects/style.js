import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogPreviewContainer = styled.article`
  position: relative;
  max-width: 920px;
  padding: 1rem;
  background: ${({ theme }) => theme.primary100};
  border-radius: 10px;
  display: grid;
  margin: 60px 20px;
  transition: transform 100ms ease-in-out;

  header {
    h3 {
      margin: 0;
      font-family: 'Playfair Display';
      font-weight: bold;
      font-size: 3rem;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.primary600};
    }
    small {
      font-weight: normal;
      line-height: 3rem;
      font-size: 1rem;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.primary600};
    }
  }

  section {
    color: ${({ theme }) => theme.primary600};
    p {
      margin: 0;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.primary600};
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const BlogsWrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

export const Tags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  padding: 0.1rem 0.5rem;
  background: ${({ type }) =>
    (type === 'coding' && '#ddddff') ||
    (type === 'productivity' && '#ffc4c4') ||
    (type === 'blockchain' && 'rgb(238 174 46)') ||
    (type === 'life' && 'rgb(170 255 209)')};
  border-radius: 5px;
  margin: 1rem 0.4rem 1rem 0;
  font-size: 0.9rem;
  color: #2c2c32;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  gap: 20px;
  .active {
    background-color: #d3d3de63;
  }
`;

export const PageBtn = styled(Link)`
  width: 40px;
  height: 40px;
  border: 1px solid #d3d3de63;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary800};
`;
