import React from "react";
import { SearchInputWrapper, StyledSearchInput } from "./styles/searchinput.styled";
import Icon from "components/icon";
import { BasicVar } from "styles/variables";

const SearchInput = ({ ...rest }) => {
    return (
        <SearchInputWrapper>
            <StyledSearchInput {...rest} />
            <Icon icon="Search" width="20px" height="20px" fill={BasicVar.color2.label} />
        </SearchInputWrapper>
    )
}

export default SearchInput;