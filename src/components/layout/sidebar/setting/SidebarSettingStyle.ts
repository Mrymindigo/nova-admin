import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  padding:${({ theme }) => theme.spacing(4)};
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  background:  ${({ theme }) => theme.colors.textMuted};
  border-radius: 4rem;
`;

export const ThemeButton = styled.button<{ $active: boolean }>`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  background: ${({ $active , theme }) => ($active ? theme.colors.textMuted : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.textMuted)};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    color:  ${({ theme }) => theme.colors.secondary};
  }
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  justufy-content:center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(4)};
  border: none;
  background: transparent;
  color:  ${({ theme }) => theme.colors.secondary};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4rem;

  &:hover {
    background:  ${({ theme }) => theme.colors.textMuted};
  }
`;