import styled from "styled-components";
import { BasicVar } from "styles/variables";

export const Color = styled.a<{ active: boolean }>`
    position: relative;
    background: ${props => props.active ? BasicVar.color.label : 'transparent'};
    width: 40px;
    height: 40px;
    padding: 2px;

    > div:first-child{
        width: 100%;
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.15);
    }
`