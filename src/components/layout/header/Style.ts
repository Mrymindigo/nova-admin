import styled from "styled-components";

export const HeaderContainer = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
background:${({ theme }) => theme.colors.secondary};
padding: ${({ theme }) => theme.spacing(8)};
`

export const HeaderIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: ${({ theme }) => theme.spacing(2)};
`

