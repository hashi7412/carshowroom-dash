import React from "react";
import FBox from "elements/fbox";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";
import ClipBox from "components/clip-box";

interface CardProps {
    children: any
    item: CarInfo
    order: number
    isHideNumber?: boolean
    onClick?: any
    active?: boolean
    isSm?: boolean
}

const Card: React.FC<CardProps> = ({ children, item, order, isHideNumber, onClick, active, isSm }) => {
    return (
        <FBox
            fDir={'column'}
            p={'0 0.5rem'}
            h={'100%'}
            mb={'1rem'}
        >
            <FBox
                onClick={onClick}
                position={'relative'}
                flex={1}
                fDir={'column'}
                bg={BasicVar.bgCard.label}
                cursor={'pointer'}
                bd={`1px solid ${active ? DefaultColor.primary.label : 'transparent'}`}
            >
                {!isHideNumber && (
                    <ClipBox
                        position={'absolute'}
                        top={'0'}
                        left={'0'}
                        p={'0.5rem 1rem'}
                        bg={active ? DefaultColor.primary.label : BasicVar.bg.label}
                        fSize={isSm ? FontSize.fSize4.label : FontSize.fSize3.label}
                    >
                        {order + 1}
                    </ClipBox>
                )}
                {
                    children
                }
            </FBox>
        </FBox>
    )
}

export default Card;
