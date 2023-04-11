import Tab from "components/tab";
import React from "react";
import FBox from "elements/fbox";
import { BasicVar, DefaultColor } from "styles/variables";
import { Box } from "elements";
import Heading from "elements/heading";
import Text from "elements/text";
import Input from "components/input";
import { CARSMOCKDATA } from "constants/document";
import Card from "components/card";
import Price from "components/price";
import Img from "elements/img";
import { Color } from "./styles/availablecar.styled";
import Icon from "components/icon";
import Checkbox from "components/checkbox";

const items = [
    { label: 'Compacts', key: 'compacts' },
    { label: 'Motorcycles', key: 'motorcycles' },
    { label: 'Muscle', key: 'muscle' },
    { label: 'Off-Road', key: 'off-road' },
    { label: 'Rally', key: 'rally' },
    { label: 'SUVS', key: 'suvs' },
]

const colors = [
    { name: '', value: '#25211E' },
    { name: '', value: '#332E28' },
    { name: '', value: '#402E24' },
    { name: '', value: '#25211E' },
    { name: '', value: '#332E28' },
    { name: '', value: '#402E24' },
    { name: '', value: '#935934' },
    { name: '', value: '#96603A' },
    { name: '', value: '#C28960' },
    { name: '', value: '#935934' },
    { name: '', value: '#96603A' },
    { name: '', value: '#C28960' },
]

const AvaiableCars = () => {
    const [activeKey, setActiveKey] = React.useState<string>(items[1].key);
    const [activeCar, setActiveCar] = React.useState<number>(0);
    const [activeCars, setActiveCars] = React.useState<boolean[]>(Array(CARSMOCKDATA.length).fill(false));
    const [activeColors, setActiveColors] = React.useState<boolean[]>(Array(colors.length).fill(false));
    const [isTestDrive, setIsTestDrive] = React.useState<boolean>(true);
    const [isSpecialOffer, setIsSpecialOffer] = React.useState<boolean>(true);

    return (
        <FBox g={'1rem'} h={'100%'}>
            <FBox fDir={'column'} w={'70%'} bg={BasicVar.bgCard.label} p={'2rem'} overflow={'auto'}>
                <Box mb={'1rem'}>
                    <Heading level={3}>Available Cars</Heading>
                </Box>
                <Tab items={items} activeKey={activeKey} setActiveKey={setActiveKey}>
                    <FBox fWrap={'wrap'} m={'0 -0.5rem'} gy={'1rem'}>
                        {CARSMOCKDATA.map((item: CarInfo, key: number) => (
                            <Box w={'33.3%'}>
                                <Card isSm key={key} item={item} order={key} active={activeCar === key} onClick={() => setActiveCar(key)}>
                                    <Box position={'absolute'} top={'0'} right={'0'}>
                                        <Price item={item} isSm />
                                    </Box>
                                    <FBox flex={1} vAlign={'center'} >
                                        <Img src={`/cars/${item.img}`} width={'100%'} />
                                    </FBox>
                                    <FBox bg={BasicVar.bgCard.label} p={'0.5rem 2rem'} hAlign={'space-between'} vAlign={'center'}>
                                        <Text size={4}>{item.name}</Text>
                                        <Checkbox value={activeCars[key]} onChange={() => setActiveCars(activeCars.map((i, k) => k === key ? !i : i))} width={60} />
                                    </FBox>
                                </Card>
                            </Box>
                        ))}
                    </FBox>
                </Tab>
            </FBox>
            <FBox fDir={'column'} h={'100%'} w={'30%'} bg={BasicVar.bgCard.label} p={'2rem'}>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <Text size={3}>Name Car</Text>
                    <Input value={CARSMOCKDATA[activeCar].name} />
                </FBox>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <Text size={3}>Model</Text>
                    <Input prefix="#" value={CARSMOCKDATA[activeCar].model} />
                </FBox>
                <FBox mb={'3rem'} vAlign={'center'} g={'1rem'} fWrap="wrap">
                    <FBox vAlign={'center'} g={'1rem'}>
                        <Checkbox value={isTestDrive} onChange={() => setIsTestDrive(!isTestDrive)} />
                        <Text size={5}>Testdrive <Text color={DefaultColor.danger.label}>(on)</Text></Text>
                    </FBox>
                    <FBox vAlign={'center'} g={'1rem'}>
                        <Checkbox value={isSpecialOffer} onChange={() => setIsSpecialOffer(!isSpecialOffer)} />
                        <Text size={5}>Special Offer <Text color={DefaultColor.danger.label}>(off)</Text></Text>
                    </FBox>
                </FBox>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <Text size={3}>special offer price</Text>
                    <Input prefix="$" value={CARSMOCKDATA[activeCar].sale ? CARSMOCKDATA[activeCar].sale : CARSMOCKDATA[activeCar].price} disabled={!isSpecialOffer} />
                </FBox>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <FBox vAlign={'flex-end'} hAlign={'space-between'}>
                        <Text size={3}>Standard car color</Text>
                        <Text color={BasicVar.color2.label}>max $20 000  — min $8 000 </Text>
                    </FBox>
                    <FBox w={'90%'} fWrap="wrap" g={'0.2rem'}>
                        {colors.map((item, key) => (
                            <Color onClick={() => setActiveColors(activeColors.map((i, k) => k === key ? !i : i))} active={activeColors[key]}>
                                <Box bg={item.value}> </Box>
                                {activeColors[key] && (
                                    <FBox position={'absolute'} top={'0'} left={'0'} w={'100%'} h={'100%'} vAlign={'center'} hAlign={'center'}>
                                        <Icon icon={'Check'} fill={BasicVar.color.label} width="24" height="24" />
                                    </FBox>
                                )}
                            </Color>
                        ))}
                    </FBox>
                </FBox>
            </FBox>
        </FBox>
    )
}

export default AvaiableCars;
