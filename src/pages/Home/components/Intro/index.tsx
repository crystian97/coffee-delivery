import { ImageHero, IntroWrapper, Presentation, TextRegularL, Title, TitleXl } from "./styles"
import ImageHeroPng from '../../../../assets/imageHero.png'
export default function Intro(){
    return (
        <IntroWrapper>
            <Presentation>
                <Title>
                <TitleXl>Encontre o café perfeito  para qualquer hora do dia</TitleXl>
                <TextRegularL>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</TextRegularL>
                </Title>
            </Presentation>
            <ImageHero src={ImageHeroPng}/>
        </IntroWrapper>
    );
}