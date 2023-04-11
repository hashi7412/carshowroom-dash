import FBox from "elements/fbox";
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <FBox h={'100vh'} hAlign={'center'} vAlign={'center'} g={'2rem'}>
            <Link to={'/dash/'}>Dashboard</Link>
            <Link to={'/dash-management/'}>Dashboard Management</Link>
        </FBox>
    )
}

export default Landing;