import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//search section
export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const EmptyMessage = styled.p`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
`;