import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Typography, Card, CardContent, Grid, TextField, Button } from "@material-ui/core";
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
const Background = styled.div`
    background-image: url('${process.env.PUBLIC_URL}/img/contactBack.jpg');
    height: 500px;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    ${tw`
        flex
        flex-wrap
        md:text-7xl
        text-5xl
        pt-60
        justify-center
        text-center
    `}
`
const ContactText = styled.h2`
    ${tw`
        text-white
        font-sans
        italic
        font-bold
        
    `}
`


export function ContactUs(){
    return(
        <PageContainer>
            <Background>
                <ContactText>Feel free to contact us</ContactText>

            </Background>
                <Card style={{maxWidth:550, marginTop:-70, boxShadow: '0 2.3px 18px -5px rgba(0, 0, 0, 0.4)'}}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label='First Name' placeholder='Enter first name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label='Last Name' placeholder='Enter last name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type='email' label='Email' placeholder='Enter email' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type='number' label='Phone' placeholder='Enter phone number' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label='Message' multiline rows={4} placeholder='Type your message here...' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type='submit' variant='contained' color='secondary' fullWidth >Send</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            <Footer />
        </PageContainer>
        
    )
}