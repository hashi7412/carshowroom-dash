import React from "react";
import { MenuItemWrapper } from "./styles/menu.styled";
import { MENUITEM } from "constants/document";
import { Link, useLocation } from "react-router-dom";
import FBox from "elements/fbox";

interface MenuItemProps {
    children: any
    active: boolean
    to: string
    badge?: string | number
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to, active, badge }) => (
    <MenuItemWrapper active={active} badge={badge}>
        <Link to={to}>
            {children}
        </Link>
    </MenuItemWrapper>
)

const Menu = () => {
    const location = useLocation();
    const tabKey = location.pathname.split("/")[2];

    return (
        <FBox g={'2rem'}>
            {MENUITEM.map((item:CategoryItemType, key) => (
                <MenuItem key={key} to={item.link || ''} badge={item.badge} active={tabKey === item.key}>
                    {item.label}
                </MenuItem>
            ))}
        </FBox>
    )
}

export default Menu;