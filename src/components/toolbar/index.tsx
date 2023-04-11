import Icon from "components/icon";
import FBox from "elements/fbox";
import React from "react";
import { BasicVar } from "styles/variables";
import { ToolbarButton } from "./styles/toolbar.styled";

const Toolbar = () => {
    return (
        <FBox hAlign={'flex-end'} p={'0 1.5rem'} g={'0.5rem'}>
            <ToolbarButton>
                <Icon icon="Setting" fill={BasicVar.color3.label} />
            </ToolbarButton>
            <ToolbarButton>
                <Icon icon="Close" fill={BasicVar.color3.label} />
            </ToolbarButton>
        </FBox>
    )
}

export default Toolbar;
