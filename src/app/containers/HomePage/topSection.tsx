import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PhoneImg from '../../../assets/images/Phone.png'
import BlobImg from '../../../assets/images/blob.svg'
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopBack = styled.div`
    background-size: cover;
    width: 100%;
    height: 470px;
`
const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12      
    `}
`

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        mt-56
    `}
`
const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-60
    `}
`
const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-white
        -mt-16
        ml-5
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`
const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-200
        ml-5
    `}
`
const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img{
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }
    @media (min-width: ${SCREENS.lg}){
        width: 50em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-30deg);
    }
    @media (min-width: ${SCREENS.xl}){
        width: 60em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-20deg);
    }
`
const StandalonePhone = styled.div`
    width: auto;
    height: 15em;
    right: 0em;
    top: -6em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}){
        height: 16em;
        right: 0em;
        top: -6em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 21em;
        right: -8em;
        top: -5em;
    }
    @media (min-width: ${SCREENS.xl}){
        height: 33em;
        right: 0em;
        top: -6em;
    }
    
`
const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
        ml-5
    `}
`

export function TopSection(){
    return (
    <TopBack style={{backgroundImage:`url('${process.env.PUBLIC_URL}/img/background.jpg')`}}>
    <TopSectionContainer >
        <LeftContainer>
            <Slogan>
                Rent the best Car
            </Slogan>
            <Description>
                Always choose the best car from our local stores or order it remotely at the best price
                for you and get the best quality cars for as long as you like
            </Description>
            <ButtonsContainer>
                <Button text='Book A Car'/>
                <Button theme='filled' text='Sell Your Car'/>
            </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg}/>
            </BlobContainer>
            <StandalonePhone>
                <img src={PhoneImg} />
            </StandalonePhone>
        </RightContainer>
    </TopSectionContainer>
    </TopBack>
    )
}