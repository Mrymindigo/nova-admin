import styled from "styled-components";
import { NavLink } from "react-router";

export const Aside = styled.aside`
width:15%;
display:flex;
flex-direction: column;
gap:2rem;
background: ${({ theme }) => theme.colors.sidebar};
color: ${({ theme }) => theme.colors.textSecondary};
`

export const SidebarNav = styled(NavLink)`
display:flex;
gap:.5rem;
align-items:center;
justify-content:start;
padding: 1rem;
color:${({ theme }) => theme.colors.secondary};
cursor:pointer;
text-decoration-line: none;
&:hover{
background: ${({ theme }) => theme.colors.bgHover};
}
`

export const Logo = styled.div`
display:flex;
gap:.5rem;
justify-content:center;
align-items:center;
width:100%;
height:15%
`

export const LogoIcon = styled.span`
font-size:30px;
color:${({ theme }) => theme.colors.accent};
display:flex;
justify-content:center;
align-items:center;
`
export const LogoText = styled.h1`
display:flex;
justify-content:center;
align-items:center;
padding-top:.5rem;
color:${({ theme }) => theme.colors.secondary};`


export const SidebarProfileContainer = styled.div`
margin-top:auto;
padding:${({ theme }) => theme.spacing(4)};
`