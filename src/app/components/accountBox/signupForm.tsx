import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BoldLink, Input, BoxContainer, FormContainer, MutedLink, SubmitButton } from "./common";

export function SignupForm(){

    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
            <Input type='text' placeholder='Full Name' />
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Input type='password' placeholder='Confirm Password' />
            </FormContainer>
            <Marginer direction='vertical' margin={5} />
            
            <Marginer direction='vertical' margin='1.6em' />
            <SubmitButton type='submit'>SignIn</SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            <MutedLink href='#'>Already have an account?
            <BoldLink href='#' onClick={switchToSignin} >SignIn</BoldLink></MutedLink>

        </BoxContainer>
    )
}