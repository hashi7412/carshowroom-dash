import React from "react";
import { Box } from "elements";
import Img from "elements/img";
import FBox from "elements/fbox";
import { CarItemContainer, CarItemWrapper, Number, Price } from "./styles/motorcycles.styled";
import { BasicVar } from "styles/variables";
import Text from "elements/text";
import { CARSMOCKDATA } from "constants/document";

const CarItem = ({ item, order }: { item: CarInfo, order: number }) => {
    return (
        <CarItemWrapper>
            <CarItemContainer>
                <Number>{order + 1}</Number>
                <Price>
                    <FBox g={'1rem'} vAlign={'center'}>
                        <Text size={3} color={BasicVar.bgOpacity.label}>$ {item.price}</Text>
                        <Text size={2} color={BasicVar.bg.label}>$ {item.sale}</Text>
                    </FBox>
                </Price>
                <FBox p={'1rem 0'} flex={1} vAlign={'center'} >
                    <Img src={require(`assets/img/cars/1.png`)} width={'100%'} />
                </FBox>
                <Box bg={BasicVar.bgCard.label} p={'1rem 2rem'}>
                    <Text size={2}>{item.name}</Text>
                </Box>
            </CarItemContainer>
        </CarItemWrapper>
    )
}

const MotorCycles = () => {
    return (
        <FBox fWrap={'wrap'} m={'0 -0.5rem'}>
            {CARSMOCKDATA.map((item: CarInfo, key: number) => (
                <CarItem key={key} item={item} order={key} />
            ))}
        </FBox>
    )
}

export default MotorCycles;
