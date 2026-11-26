import styled, { css } from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
`;

const controlStyles = css<{ $invalid: boolean }>`
  width: 100%;
  padding: 0.6rem 0.875rem;
  font: inherit;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid
    ${({ $invalid, theme }) => ($invalid ? theme.colors.danger : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.md};

  &:focus {
    outline: none;
    border-color: ${({ $invalid, theme }) => ($invalid ? theme.colors.danger : theme.colors.accent)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Input = styled.input<{ $invalid: boolean }>`
  ${controlStyles}
`;

export const Textarea = styled.textarea<{ $invalid: boolean }>`
  ${controlStyles}
  resize: vertical;
`;

export const Select = styled.select<{ $invalid: boolean }>`
  ${controlStyles}
`;

export const ErrorText = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.danger};
`;