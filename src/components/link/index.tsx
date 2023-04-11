import React from 'react';

import { StyledLink } from './styles/link.styled';

export interface BoxPropsType extends ElementDefaultProps {
    children: any
    to: string
}

const Link: React.FC<BoxPropsType> = ({ children, ...rest }) => {
    return (
        <StyledLink {...rest}>
            {children}
        </StyledLink>
    )
}

export default Link;
