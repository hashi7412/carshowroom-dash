import React from "react";
import { HeaderWrapper } from "./styles/header.styled";
import Logo from "components/logo";
import SearchInput from "components/search-input";
import Menu from "components/menu";

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <SearchInput placeholder={'SEARCH CAR'} />
            <Menu />
        </HeaderWrapper>
    )
}

export default Header;