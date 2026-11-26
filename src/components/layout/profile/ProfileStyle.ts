
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ProfileImage = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`

export const ProfileName = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.accent};

  @media (min-width: 640px) {
    display: inline;
  }
`
