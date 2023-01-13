import { Cart, HeaderContainer, Location, Navbar } from "./styles";
import {MapPin, ShoppingCart} from 'phosphor-react'
import Logo from '../../assets/Logo.png'
export default function Header() {
    return ( 

        <HeaderContainer>
            <img src={Logo} alt="Logo coffee delivery roxo com uma caneca roxa" />
        <Navbar>
            <Location> <MapPin size={22} weight="fill" /> Porto Alegre, RS</Location>
            <Cart><ShoppingCart size={22} weight="fill"  /></Cart>
        </Navbar>
        </HeaderContainer>
     );
}

