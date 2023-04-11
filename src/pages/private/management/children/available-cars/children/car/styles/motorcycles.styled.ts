import { Box } from "elements";
import FBox from "elements/fbox";
import styled from "styled-components";
import { BasicVar } from "styles/variables";

export const CarItemWrapper = styled(FBox)`
    flex-direction: column;
    width: 33.3%;
    padding: 0 0.5rem;
    margin-bottom: 1rem;
`

export const CarItemContainer = styled(FBox)`
    flex: 1;
    flex-direction: column;
    position: relative;
    background: ${BasicVar.bgCard.label};
`

export const Number = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    padding: '0.5rem 1rem',
    background: BasicVar.bg.label
})

export const Price = styled(Box)({
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '0.2rem 1rem',
    background: BasicVar.bgBadge.label,
})
