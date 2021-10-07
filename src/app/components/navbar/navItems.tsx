import React,{useState} from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import {slide as Menu} from 'react-burger-menu';
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";


const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`
const NavItem = styled.li<{menu? : any}>`
    ${tw`
        text-sm
        md:text-base
        text-black
        font-semibold
        text-5xl
        font-sans
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-600
    `}
    ${({menu}) => menu && css`
        ${tw`
            text-white
            text-xl
            mb-3
            focus: text-white
        `}
    `}
`

export function NavItems() {

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm})

    if(isMobile)
    return (
        <Menu right styles={menuStyles}>
        <ListContainer>
            <NavItem menu>
                <a href='/Home'>Home</a>
            </NavItem>
            <NavItem menu>
                <a href="/Cars">Cars</a>
            </NavItem>
            <NavItem menu>
                <a href="/AboutUs">About Us</a>
            </NavItem>
            <NavItem menu>
                <a href="/ContactUs">Contact Us</a>
            </NavItem>
            <NavItem menu>
                <a href="/Signin">Sign In</a>
            </NavItem>
        </ListContainer>
        </Menu>
    )

    return (
        <ListContainer>
            <NavItem>
                <a href="/Home">Home</a>
            </NavItem>
            <NavItem>
                <a href="/Cars">Cars</a>
            </NavItem>
            <NavItem>
                <a href="/AboutUs">About Us</a>
            </NavItem>
            <NavItem>
                <a href="/ContactUs">Contact Us</a>
            </NavItem>
            <NavItem>
                <a href="/Signin">Sign In</a>
            </NavItem>
        </ListContainer>
    )
}