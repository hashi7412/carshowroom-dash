import React from "react";
import { ClipBoxWrapper } from "./styles/clipbox.styled";

interface PropsType extends ElementDefaultProps {
    children: any;
    trend?: 'tl' | 'tr' | 'rt' | 'rb' | 'br' | 'bl' | 'lb' | 'lt'
}

const ClipBox: React.FC<PropsType> = ({ children, ...rest }) => {
    return (
        <ClipBoxWrapper trend="" {...rest}>
            {
                children
            }
        </ClipBoxWrapper>
    )
}

export default ClipBox;
