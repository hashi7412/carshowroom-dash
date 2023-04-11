import React from "react";
import { TextProps, TextWrapper } from "./styles/text.styled";

interface PropsType extends TextProps {
    children: any
}

const Text: React.FC<PropsType> = ({ children, ...rest }) => {
    return (
        <TextWrapper {...rest}>
            {
                children
            }
        </TextWrapper>
    )
}

export default Text