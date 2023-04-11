import { Box } from "elements";
import styled from "styled-components";

export const ClipBoxWrapper = styled(Box) <{ trend: string }>`
    clip-path: ${props => {
        switch (props.trend) {
            case 'tl':
                return `polygon(0 7%, 100% 0, 100% 100%, 0% 100%)`;
            case 'tr':
                return `polygon(0 0, 100% 7%, 100% 100%, 0% 100%)`;
            case 'rt':
                return `polygon(0 0, 93% 0, 100% 100%, 0% 100%)`;
            case 'rb':
                return `polygon(0 0, 100% 0, 93% 100%, 0% 100%)`;
            case 'br':
                return `polygon(0 0, 100% 0, 100% 93%, 0% 100%)`;
            case 'bl':
                return `polygon(0 0, 100% 0, 100% 100%, 0% 93%)`;
            case 'lb':
                return `polygon(0 0, 100% 0, 100% 100%, 7% 100%)`;
            case 'lt':
                return `polygon(7% 0, 100% 0, 100% 100%, 0% 100%)`;
            default:
                return `polygon(0% 0, 100% 0, 100% 93%, 0% 100%)`;
        }
    }};
`
