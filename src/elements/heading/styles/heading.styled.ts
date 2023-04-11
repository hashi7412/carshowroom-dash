import styled from "styled-components";
import { FontSize } from "styles/variables";

export interface TextProps {
    level: 1 | 2 | 3 | 4 | 5 | 6,
    tAlign?: TextAlignType
    color?: ColorType
}

export const HeadingWrapper = styled.h1<TextProps>`
    ${props => `font-size: ${FontSize[`fSize${props.level}`].label};`}
    ${props => props.tAlign ? `text-align: ${props.tAlign};` : ``}
    font-weight: normal;
    line-height: 1;
    ${props => props.color ? `color: ${props.color};` : ``}
    text-transform: uppercase;
    margin: 0;
`
