import React from "react";
import { TabButton, TabHeader, TabWrapper } from "./styles/tab.styled";
import { Box } from "elements";

interface PropsType {
    children: any
    items: CategoryItemType[]
    activeKey: string
    setActiveKey: any
}

const Tab:React.FC<PropsType> = ({ children, items, activeKey, setActiveKey }) => {

    return (
        <TabWrapper>
            <TabHeader>
                {items.map((item, key) => (
                    <TabButton active={item.label === activeKey} onClick={() => setActiveKey(item.label)}>
                        {item.label}
                    </TabButton>
                ))}
            </TabHeader>
            <Box flex={1} overflowY={'auto'} overflowX={'hidden'} pr={'0.5rem'}>
                {
                    children
                }
            </Box>
        </TabWrapper>
    )
}

export default Tab;