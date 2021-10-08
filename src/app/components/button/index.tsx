import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps{
    theme?:'filled' | 'outlined';
    text: string;
    className?: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-thin
        md:font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `}
`
const OutlinedButton = styled(BaseButton)`
    background: linear-gradient(58deg, rgba(205,35,139,1) 20%, rgba(235,65,65,1) 100%);
    
    &:hover{
        background: transparent;
        
    }
    
    ${tw`
        
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500
    `}
`
const FilledButton = styled(BaseButton)`
    background: linear-gradient(58deg, rgba(205,35,139,1) 20%, rgba(235,65,65,1) 100%);
    
    &:hover{
        background: transparent;
        
    }
    ${tw`
        border-red-500
        text-white
        hover:text-red-500
    `}
`

export function Button(props: IButtonProps){

    const {theme, text, className} = props;

    if(theme === 'filled')
    return <FilledButton className={className}>{text}</FilledButton>;
    else
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
}