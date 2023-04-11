import { Box } from "elements";
import styled from "styled-components";
import { BasicVar, device } from "styles/variables";

export const SearchInputWrapper = styled(Box)`
    display: flex;
    padding: 1rem;
    background: ${BasicVar.bgOpacity.label};

    @media ${device.tablet} {
        width: 100%;
    }
`

export const StyledSearchInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: 300px;

    @media ${device.tablet} {
        flex: 1;
    }
`
