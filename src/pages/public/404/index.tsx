import React from "react";

import FBox from "elements/fbox";
import Img from "elements/img";

import { _404Image } from "constants/image.constants";
import Heading from "elements/heading";

interface PropsType {
}

const NotFoundPage:React.FC<PropsType> = () => {
    return (
        <FBox fDir={'column'} vAlign={'center'} hAlign={'center'} h={'100vh'}>
            <Heading level={2}>Not Found Page</Heading>
            <FBox vAlign={'center'} h={'300px'} >
                <Img src={_404Image} />
            </FBox>
        </FBox>
    )
}

export default NotFoundPage;