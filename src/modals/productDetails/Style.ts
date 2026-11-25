import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  margin: 0 auto 1rem;
  padding: 8px;
  object-fit: contain;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const ProductTitle = styled.h3`
  margin: 0 0 1rem;
  text-align: center;
`;

export const List = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1rem;
  margin: 0;
`;

export const Term = styled.dt`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Detail = styled.dd`
  margin: 0;
`;