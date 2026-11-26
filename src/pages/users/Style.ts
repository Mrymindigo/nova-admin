import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const EmptyMessage = styled.p`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;