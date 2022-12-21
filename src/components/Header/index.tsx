import { Cart, HeaderContainer, Location, Navbar } from "./styles";
import {MapPin, ShoppingCart} from 'phosphor-react'
import Logo from '../../assets/Logo.png'
export default function Header() {
    return ( 

        <HeaderContainer>
            <img src={Logo} alt="" />
        <Navbar>
            <Location> <MapPin size={32} weight="fill" /> Location</Location>
            <Cart><ShoppingCart size={32} weight="fill" />Cart</Cart>
        </Navbar>
        </HeaderContainer>
     );
}

