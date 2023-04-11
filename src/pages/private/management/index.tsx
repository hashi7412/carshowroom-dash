import React from "react";
import { Outlet } from "react-router-dom";
import { Container, DashLayoutWrapper } from "./styles/dash.styled";
import Toolbar from "components/toolbar";
import { HeaderWrapper } from "../dashboard/components/header/styles/header.styled";
import { Logo2 } from "components/logo";
import SearchInput from "components/search-input";

interface PropsType {
}

const MngDashLayout: React.FC<PropsType> = ({ ...rest }) => {
    return (
        <DashLayoutWrapper {...rest}>
            <Toolbar />
            <HeaderWrapper>
                <Logo2 />
                <SearchInput placeholder={'SEARCH CAR'} />
            </HeaderWrapper>
            <Container>
                <Outlet />
            </Container>
        </DashLayoutWrapper>
    );
};

export default MngDashLayout;
