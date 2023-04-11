import ClipBox from "components/clip-box";
import { Box } from "elements";
import styled from "styled-components";
import { BasicVar, DefaultColor } from "styles/variables";

interface CheckBoxType {
    width?: number
}

export const CheckboxWrapper = styled.label<CheckBoxType>`
    position: relative;
    width: ${props => props.width ? props.width + 'px' : `80px`};
    height: ${props => props.width ? props.width / 2 + 'px' : `40px`};
    cursor: pointer;
`

export const Board = styled(Box)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 100%;
    height: 70%;
    background: ${BasicVar.bg.label};
`

export const Thumb = styled(ClipBox)<{checked: boolean}>`
    position: absolute;
    top: 50%;
    left: -5%;
    transform: translate(${props => props.checked ? `100%` : `-1px`}, -50%);
    width: 60%;
    height: 100%;
    background: ${props => props.checked ? DefaultColor.danger.label : '#2A343E'};

    > div {
        opacity: ${props => props.checked ? `1` : `0`}
    }
`
