import styled from 'styled-components';

export const Message = styled.p`
  margin: 0 0 1rem;
`;

export const ErrorText = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  font: inherit;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.danger};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;