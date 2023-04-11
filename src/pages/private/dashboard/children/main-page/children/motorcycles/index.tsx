import React from "react";
import FBox from "elements/fbox";
import Img from "elements/img";
import { Box } from "elements";
import Text from "elements/text";
import { BasicVar, DefaultColor } from "styles/variables";
import { CARSMOCKDATA } from "constants/document";
import Heading from "elements/heading";
import Icon from "components/icon";
import Card from "components/card";
import Price from "components/price";

const colors = [
    { name: '', value: '#25211E' },
    { name: '', value: '#332E28' },
    { name: '', value: '#402E24' },
    { name: '', value: '#935934' },
    { name: '', value: '#96603A' },
    { name: '', value: '#C28960' },
]

const MotorCycles = () => {
    const [activeCar, setActiveCar] = React.useState(0);
    const [activeColor, setActiveColor] = React.useState(0);

    return (
        <FBox fDir={'column'} h={'100%'}>
            <FBox flex={1} vAlign={'center'} overflow="hidden" position={'relative'}>
                <Img src={`/cars/${CARSMOCKDATA[activeCar].img}`} width={'75%'} height={'fit-content'} />
                <Box
                    position={'absolute'}
                    top={'10%'}
                    right={'0'}
                >
                    <Heading level={4} tAlign={'right'}>Colors</Heading>
                    <FBox w={'120px'} fWrap="wrap">
                        {colors.map((item, key) => (
                            <Box
                                onClick={() => setActiveColor(key)}
                                bg={activeColor === key ? BasicVar.color.label : `transparent`}
                                w={'40px'}
                                h={'40px'}
                                p={'3px'}
                            >
                                <Box bg={item.value} w={'100%'} h={'100%'}> </Box>
                            </Box>
                        ))}
                    </FBox>
                </Box>
                <Box
                    position={'absolute'}
                    top={'0'}
                    left={'40%'}
                    bg={BasicVar.color.label}
                    p={'1rem'}
                    after={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        bdl: '0px solid transparent',
                        bdr: '50px solid transparent',
                        bdt: `20px solid ${BasicVar.color.label}`,
                        content: '\'\''
                    }}
                >
                    <Heading level={3} color={BasicVar.bg.label}>LADA 2106</Heading>
                    <Box bg={BasicVar.color.label} pt={'1rem'}>
                        <FBox g={'0.8rem'}>
                            <FBox vAlign={'center'} g={'0.5rem'}>
                                <FBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                    <Icon icon="Speed" width="26px" height="17px" />
                                </FBox>
                                <FBox fDir={'column'}>
                                    <Text color={BasicVar.bg.label} size={4} lh={1}>{CARSMOCKDATA[activeCar].speed}</Text>
                                    <Text size={6} color={BasicVar.color2.label} lh={1}>km/h</Text>
                                </FBox>
                            </FBox>
                            <FBox vAlign={'center'} g={'0.5rem'}>
                                <FBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                    <Icon icon="Speed" width="26px" height="17px" />
                                </FBox>
                                <FBox fDir={'column'}>
                                    <Text color={BasicVar.bg.label} size={4} lh={1}>{CARSMOCKDATA[activeCar].speed}</Text>
                                    <Text size={6} color={BasicVar.color2.label} lh={1}>Acceleration</Text>
                                </FBox>
                            </FBox>
                            <FBox vAlign={'center'} g={'0.5rem'}>
                                <FBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                    <Icon icon="Speed" width="26px" height="17px" />
                                </FBox>
                                <FBox fDir={'column'}>
                                    <Text color={BasicVar.bg.label} size={4} lh={1}>{CARSMOCKDATA[activeCar].speed}</Text>
                                    <Text size={6} color={BasicVar.color2.label} lh={1}>Braking</Text>
                                </FBox>
                            </FBox>
                            <FBox vAlign={'center'} g={'0.5rem'}>
                                <FBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                    <Icon icon="Speed" width="26px" height="17px" />
                                </FBox>
                                <FBox fDir={'column'}>
                                    <Text color={BasicVar.bg.label} size={4} lh={1}>{CARSMOCKDATA[activeCar].speed}</Text>
                                    <Text size={6} color={BasicVar.color2.label} lh={1}>Control</Text>
                                </FBox>
                            </FBox>
                        </FBox>
                    </Box>
                </Box>
            </FBox>
            <FBox bg={BasicVar.bgCard.label} fDir={'column'}>
                <FBox p={'1rem 1.5rem'}>
                    <Heading level={3}>Motorcycles --- 32</Heading>
                </FBox>
                <FBox g={'1rem'} overflow="auto" p={'1rem 1.5rem'}>
                    {CARSMOCKDATA.map((item: CarInfo, key: number) => (
                        <Box minW={'320px'}>
                            <Card isSm item={item} order={key} active={key === activeCar} onClick={() => setActiveCar(key)}>
                                <Box position={'absolute'} top={'0'} right={'0'}>
                                    <Price item={item} isSm />
                                </Box>
                                <FBox flex={1} vAlign={'center'} >
                                    <Img src={`/cars/${item.img}`} width={'100%'} />
                                </FBox>
                                <Box bg={BasicVar.bgCard.label} p={'0.5rem 2rem'}>
                                    <Text size={4}>{item.name}</Text>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </FBox>
            </FBox>
        </FBox>
    )
}

export default MotorCycles;
