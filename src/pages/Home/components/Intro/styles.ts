import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 544px;
    padding-top: 94px;
    
`
export const ImageHero = styled.img`
    width: 29.75rem;
    height: 22.5rem;
`;

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height:544px ;
    gap: 16px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 0px;
    gap: 16px;
    width: 588px;
`
export const TitleXl = styled.h1`
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 48px;
    line-height: 130%;
    color: ${(props)=>props.theme['base-title']};
`
export const TextRegularL = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) =>props.theme['base-subtitle']};
`
export const ItemsContainer = styled.div`
    width: 35.438rem;
    height: 5.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
    
`;
const ITEMS_PROPS = {
yellow:'yellow',
yellow_dark:'yellow-dark',
purple:'purple',
base_text:'base-text'


} as const

interface Items{
    itensColor:keyof typeof ITEMS_PROPS
}
export const Item = styled.div<Items>`
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 32px;
    font-weight: 400;
    color: ${(props)=>props.theme['base-text']};
    svg{
        border-radius: 50%;
        padding: 8px;
        background-color: ${(props)=>props.theme[ITEMS_PROPS[props.itensColor]]};
        color: ${(prosp) =>prosp.theme['white']};
    }

`
