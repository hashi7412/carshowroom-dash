import React from "react";
import { Board, CheckboxWrapper, Thumb } from "./styles/checkbox.styled";
import FBox from "elements/fbox";
import Icon from "components/icon";
import { BasicVar } from "styles/variables";

interface PropsType {
    value: boolean
    onChange: any
    width?: number
}

const Checkbox = ({ value, onChange, width }: PropsType) => {
    return (
        <CheckboxWrapper width={width} onClick={onChange}>
            <Board> </Board>
            <Thumb trend="bl" checked={value}>
                <FBox position={'absolute'} top={'0'} left={'0'} w={'100%'} h={'100%'} vAlign={'center'} hAlign={'center'}>
                    <Icon icon={'Check'} fill={BasicVar.color.label} width="30px" height="30px" />
                </FBox>
            </Thumb>
        </CheckboxWrapper>
    )
}

export default Checkbox;
