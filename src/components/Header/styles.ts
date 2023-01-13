import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10rem;
    padding-left: 10rem;
`

export const Navbar = styled.nav`
 display: flex;
 width: 12.63rem;
 gap: 12px;
 font-family: 'Roboto', sans-serif;
 font-weight: regular;
 font-size: 14px;
 

`
export const Location = styled.span`
 background: ${props => props.theme['purple-light']};
 color: ${props=>props.theme['purple-dark']};
 display: flex;
 align-items: center;
 width: 8.938rem;
 height: 2.375rem;
 padding: 0.5rem;
 border-radius: 6px;
 svg{
    color: ${props=>props.theme['purple']};
 }

`
export const Cart = styled.span`
background: ${props=>props.theme['yellow-light']};
color: ${props=>props.theme['yellow-dark']};
width: 2.375rem;
height: 2.375rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
font-size: 2rem;

`