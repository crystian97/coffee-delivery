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

`
export const Location = styled.span`
 background: ${props => props.theme['purple']};
`
export const Cart = styled.span`
background: ${props=>props.theme['yellow']};
`