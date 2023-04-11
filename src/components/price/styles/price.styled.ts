import { Box } from "elements";
import Text from "elements/text";
import styled from "styled-components";
import { BasicVar, DefaultColor } from "styles/variables";

export const PriceWrapper = styled(Box)<{isSale: boolean}>`
    padding: 0.2rem 1rem;
    background: ${props => props.isSale ? BasicVar.bgBadge.label : DefaultColor.primary.label};
`

export const SaleText = styled(Text)`
    position: relative;

    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-5deg);
        width: 120%;
        height: 4px;
        background: #FF0100;
        box-shadow: 1px 3px 0 0px #a50000;
        opacity: 0.5;
        content: '';
    }
`