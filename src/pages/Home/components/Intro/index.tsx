import { ImageHero, IntroWrapper, Item, ItemsContainer, Presentation, TextRegularL, Title, TitleXl } from "./styles"
import ImageHeroPng from '../../../../assets/imageHero.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


export default function Intro(){
    return (
        <IntroWrapper>
            <Presentation>
                <Title>
                <TitleXl>Encontre o café perfeito  para qualquer hora do dia</TitleXl>
                <TextRegularL>Com o Coffee Delivery você recebe seu café onde estiver, a   qualquer hora</TextRegularL>
                </Title>
                <ItemsContainer>
                    <Item itensColor="yellow_dark"><ShoppingCart size={32} weight="fill"/><p>Compra simples e segura</p></Item>
                    <Item itensColor="base_text"><Package size={32} weight="fill"/><p>Embalagem mantém o café intacto</p></Item>
                    <Item itensColor="yellow"><Timer size={32} weight="fill"/><p>Entrega rápida e rastreada</p></Item>
                    <Item itensColor="purple"><Coffee size={32} weight="fill"/><p>O café chega fresquinho até você</p></Item>
                </ItemsContainer>
            </Presentation>
            <ImageHero src={ImageHeroPng}/>
        </IntroWrapper>
    );
}