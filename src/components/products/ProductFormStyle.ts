import styled from 'styled-components';

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitError = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;
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

export const SubmitButton = styled.button`
  padding: 0.5rem 1.25rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;