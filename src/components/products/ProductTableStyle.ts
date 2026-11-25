import styled from 'styled-components';

export const TableCard = styled.div`
display: flex;
width: 90%;
justify-content: center;
align-items: center;
margin: 2rem 0 2rem 0;
background: ${({ theme }) => theme.colors.secondary};
border: 1px solid ${({ theme }) => theme.colors.border};
border-radius: ${({ theme }) => theme.radius.lg};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 1rem;
  text-align: start;
  font-weight: 700;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Tr = styled.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover td {
    background: ${({ theme }) => theme.colors.bgHover};
  }
`;

export const Td = styled.td`
  padding: .75rem 1rem;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s ease;
`;

export const TitleCell = styled(Td)`
  max-width: 320px;
  font-weight: 600;
`;

export const ImageBox = styled.div`
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  padding: 6px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  object-fit: cover;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;


export const ActionsCell = styled(Td)`
  white-space: nowrap;
`;

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButton = styled.button<{ $variant?: 'danger' }>`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid
    ${({ $variant, theme }) => ($variant === 'danger' ? theme.colors.dangerBg : theme.colors.border)};
  background: ${({ $variant, theme }) =>
        $variant === 'danger' ? theme.colors.dangerBg : theme.colors.secondary};
  color: ${({ $variant, theme }) =>
        $variant === 'danger' ? theme.colors.danger : theme.colors.text};
  transition: border-color 0.2s ease;

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
`;