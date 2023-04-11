import styled from "styled-components";
import { BasicVar, device } from "styles/variables";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    gap: 0.5rem 2rem;
    padding: 0 ${BasicVar.containerXPadding.label} 0;

    @media ${device.tablet} {
        flex-direction: column;
    }
`
