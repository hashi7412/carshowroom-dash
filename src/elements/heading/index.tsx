import React from "react";
import { HeadingWrapper, TextProps } from "./styles/heading.styled";

interface PropsType extends TextProps {
    children: any
    level: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading: React.FC<PropsType> = ({ children, level, ...rest }) => {
    return (
        <HeadingWrapper as={`h${level}`} level={level} {...rest}>
            {children}
        </HeadingWrapper>
    )
}

export default Heading