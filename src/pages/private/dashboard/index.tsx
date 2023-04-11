import React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "components/toolbar";
import { Box } from "elements";
import FBox from "elements/fbox";
import { BasicVar } from "styles/variables";
import Header from "components/header";

const DashLayout = () => {
    return (
        <FBox
            fDir={'column'}
            h={'100vh'}
            overflow={'hidden'}
            pt={'1rem'}
        >
            <Toolbar />
            <Header />
            <Box
                flex={1}
                p={`1rem ${BasicVar.containerXPadding.label} 0`}
                overflow={'hidden'}
            >
                <Outlet />
            </Box>
        </FBox>
    );
};

export default DashLayout;
