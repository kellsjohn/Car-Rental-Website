import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/Car";
import { Car } from "../../components/Car";
import { Footer } from "../../components/footer";

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
const TopCarsContainer = styled.div`
    ${tw`
        
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`
const Title = styled.h2`
    ${tw`
        mt-20
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold 
    `}
`
const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`
export function TopCars(){

    const testCar: ICar = {
        name: "Audi S3",
        mileage: "10k",
        thumbnailSrc:
          "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar = {
        name: "HONDA cITY 5 Seater",
        mileage: "20k",
        thumbnailSrc:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
      };

    return(
        <PageContainer>
        <TopCarsContainer>
            <Title> Explore and Choose the Best for You </Title>
            <CarsContainer>
                <Car {...testCar} />
                <Car {...testCar2} />
                <Car {...testCar} />
                <Car {...testCar2} />
                <Car {...testCar} />
                <Car {...testCar2} />
                <Car {...testCar} />
                <Car {...testCar2} />
            </CarsContainer>
        </TopCarsContainer>
        <Footer/>
        </PageContainer>
    )
}