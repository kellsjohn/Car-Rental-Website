import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { BookingSteps } from './bookingSteps';
import { TopSection } from './topSection';

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

export function HomePage(){
    return (
    
    <PageContainer >
        <TopSection />
        <Marginer direction='vertical' margin='2em' />
        <BookCard />
        <Marginer direction='vertical' margin='8em' />
        <BookingSteps />
        <Footer/>
    </PageContainer>
    
    )
}