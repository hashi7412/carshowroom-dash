import React from "react";
import { PriceWrapper, SaleText } from "./styles/price.styled";
import FBox from "elements/fbox";
import Text from "elements/text";
import { BasicVar } from "styles/variables";

interface PropsType {
    item: CarInfo
    isSm?: boolean
}

const Price = ({ item, isSm }: PropsType) => {
    return (
        <PriceWrapper isSale={item.sale ? true : false}>
            {item.sale ? (
                <FBox g={'1rem'} vAlign={'center'}>
                    <SaleText size={isSm ? 4 : 3} color={BasicVar.bgOpacity.label}>$ {item.price}</SaleText>
                    <Text size={isSm ? 3 : 2} color={BasicVar.bg.label}>$ {item.sale}</Text>
                </FBox>
            ) : (
                <Text size={isSm ? 3 : 2} color={BasicVar.bg.label}>$ {item.price}</Text>
            )}
        </PriceWrapper>
    )
}

export default Price;
