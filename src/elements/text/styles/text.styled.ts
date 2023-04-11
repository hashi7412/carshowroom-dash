import styled from "styled-components";
import { FontSize } from "styles/variables";

export interface TextProps {
    size?:              1 | 2 | 3 | 4 | 5 | 6 | 'auto',
    color?:             string
    lh?:                number
    p?:                 PaddingType
    pl?:                PaddingType
    pr?:                PaddingType
    pt?:                PaddingType
    pb?:                PaddingType
    m?:                 MarginType
    ml?:                MarginType
    mr?:                MarginType
    mt?:                MarginType
    mb?:                MarginType
}

export const TextWrapper = styled.span<TextProps>`
    ${props => props.size           ? `font-size: ${props.size === 'auto' ? 'auto' : FontSize[`fSize${props.size}`].label};` : ``}
    ${props => props.color          ? `color: ${props.color};`                      : ``}
    ${props => props.lh             ? `line-height: ${props.lh};`                   : ``}
    ${props => props.p				? `padding: ${props.p};`						: ``}
    ${props => props.pl				? `padding-left: ${props.pl};`					: ``}
    ${props => props.pr				? `padding-right: ${props.pr};`					: ``}
    ${props => props.pt				? `padding-top: ${props.pt};`					: ``}
    ${props => props.pb				? `padding-bottom: ${props.pb};`				: ``}
    ${props => props.m				? `margin: ${props.m};`							: ``}
    ${props => props.ml				? `margin-left: ${props.ml};`					: ``}
    ${props => props.mr				? `margin-right: ${props.mr};`					: ``}
    ${props => props.mt				? `margin-top: ${props.mt};`					: ``}
    ${props => props.mb				? `margin-bottom: ${props.mb};`					: ``}
`