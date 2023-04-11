import { Box } from "elements";
import FBox from "elements/fbox";
import styled from "styled-components";
import { BasicVar, DefaultColor } from "styles/variables";

export const CarItemWrapper = styled(FBox)`
    flex-direction: column;
    width: 33.3%;
    margin-bottom: 1rem;
`

export const CarItemContainer = styled.a <{ active: boolean }>`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 320px;
    position: relative;
    background: ${BasicVar.bgCard.label};
    border: 1px solid ${props => props.active ? DefaultColor.primary.label : 'transparent'};
`

export const Number = styled(Box) <{ active: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    background: ${props => props.active ? DefaultColor.primary.label : BasicVar.bg.label};

`

export const Price = styled(Box)({
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '0.2rem 1rem',
    background: BasicVar.bgBadge.label,
})

export const Tooltip = styled(Box)`
    position: absolute;
    top: 0;
    left: 40%;
    background: ${BasicVar.color.label};
    padding: 1rem 1rem;

    &:after {
        position: absolute;
        top: 100%;
        left: 0;
        border-left: 0px solid transparent;
        border-right: 50px solid transparent;
        border-top: 20px solid ${BasicVar.color.label};
        content: '';
    }
`

export const ColorPicker = styled(Box)`
    position: absolute;
    top: 10%;
    right: 0%;
`

export const Color = styled.a<{bg: string}>`
    background: ${props => props.bg};
    width: 40px;
    height: 40px;
    padding: 3px;

    > div{
        width: 100%;
        height: 100%;
    }
`