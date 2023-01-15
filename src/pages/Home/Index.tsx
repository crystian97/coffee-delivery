import Header from "../../components/Header";
import CoffeeList from "./components/CoffeeList";
import Intro from "./components/Intro";
import { HomeContainer } from "./styles";

function Home() {
    return (  
        <>
        <Header/>
        <HomeContainer>
            <Intro/>
            <CoffeeList/>
        </HomeContainer>
        </>
    );
}

export default Home;