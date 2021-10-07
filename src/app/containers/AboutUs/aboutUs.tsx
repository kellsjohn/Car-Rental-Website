import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Footer } from '../../components/footer';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        overflow-y-hidden
    `}
`;
const AboutContainer = styled.div`

    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-16
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `}
`
const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`
const Title = styled.div`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`
const InfoText = styled.div`
    ${tw`
        max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `}
`
const AboutBackground = styled.div`
    background-image: url('${process.env.PUBLIC_URL}/img/aboutBack.jpg');
    height: 450px;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: 768px){
        
    }

    ${tw`
        flex
        flex-wrap
    `}
`
export function AboutUs(){
    return (
        <PageContainer>
            <AboutBackground />
        <AboutContainer>
            <InfoContainer>
                <Title>Feel the Best Experience with our Rental Deals</Title>
                <InfoText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Accusamus commodi inventore optio nihil assumenda id cupiditate
                      ducimus animi culpa amet deserunt vero quis necessitatibus voluptas, 
                    quos maiores veritatis doloribus quidem?
                </InfoText>
            </InfoContainer>
        </AboutContainer>
        <Footer></Footer>
        </PageContainer>
    )
}