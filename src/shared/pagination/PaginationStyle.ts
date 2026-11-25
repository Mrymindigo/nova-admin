import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  padding-inline: 0.5rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.secondary)};
  color: ${({ $active, theme }) => ($active ? '#ffffff' : theme.colors.text)};
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  html[dir='rtl'] & svg {
    transform: scaleX(-1);
  }
`;