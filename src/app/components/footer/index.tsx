import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
    height: auto;
    ${tw`
        flex
        flex-col
        min-w-full
        bg-black
        md:mt-20
        pt-10
        md:pt-12
        pb-14
        items-center
        justify-center
    `}
`
const InnerContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        min-w-full
        h-full
        max-w-screen-2xl
        
    `}
`
const BottomContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-center
        max-w-screen-2xl
        mt-10
    `}
`
const CopyrightText = styled.span`
    font-size: 12px;
    ${tw`
        text-gray-300
    `}
` 
const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        pl-20
        mr-10
        md:mr-20
    `}
`
const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-3
    `}
`
const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-28
        pl-20
        pr-20
        md:pl-3
        md:pr-3
        mt-7
        md:mt-0
    `}
`
const LinksList = styled.div`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`
const ListItem = styled.li`
    ${tw`
        mb-3
    `}
    & > a{
        ${tw`
            text-sm
            text-white
            transition-all
            hover: text-gray-200
        `}
    }
`
const HeaderTitle = styled.h3`
    ${tw`
        text-xl
        font-bold
        text-white
        mb-3
    `}
`
const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`
const RedIcon = styled.span`
    ${tw`
        w-7
        h-7
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
        bg-red-600
        `}
`
const SmallText = styled.div`
    ${tw`
        text-sm
        text-white
    `}
`
export function Footer(){
    return(
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color='white' bgColor='dark'/>
                    <AboutText>BookMyCar is a car renting company located in Canada which has high
                        quality cars and top rated services
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem>
                            <a href='#'>Home</a>
                        </ListItem>
                        <ListItem>
                            <a href='#'>Cars</a>
                        </ListItem>
                        <ListItem>
                            <a href='#'>Services</a>
                        </ListItem>
                        <ListItem>
                            <a href='#'>About Us</a>
                        </ListItem>
                        <ListItem>
                            <a href='#'>Contact Us</a>
                        </ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+91 9188540531</SmallText>
                    </HorizontalContainer>
                    
                </SectionContainer>
                <SectionContainer>
                <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>bookmycar@gmail.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>Copyright &copy; {new Date().getFullYear()} Bookmycar | All rights reserved.</CopyrightText>
            </BottomContainer>
            
                <CopyrightText>Designed by Jobin John</CopyrightText>
            
        </FooterContainer>
    )
}