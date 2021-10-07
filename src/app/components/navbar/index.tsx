import React,{useEffect, useState} from "react";
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from "../logo";
import { NavItems } from "./navItems";
import './navbar.css'

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        z-20
        fixed
        w-full
        min-w-full
        max-w-2xl
        flex
        flex-row
        items-center
        lg: pl-12
        lg: pr-12
        justify-between
        shadow-2xl
    `}
`
const LogoContainer = styled.div`
    @media screen and (max-width: 768px){
        margin-left: -10%;
    }
    
`

export function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 60){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        
        <NavbarContainer className={colorChange ? 'navbar colorChange' : 'navbar'}>            
            <LogoContainer >
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
        
    )
}