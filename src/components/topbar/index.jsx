import React from "react";
import styled from "styled-components";

import ImparLogo from '../../assets/logo-teste.svg'

const Bar = styled.div`
    height: 64px;
    width: 100vw;
    position: sticky;
    top: 0;
    background-image: linear-gradient(to right, ${props => props.theme.colors.primary} , ${props => props.theme.colors.secondary});
    display: flex;
    align-items: center;
    z-index: 2;
`;

const Logo = styled.img`
    opacity: 1;
    margin-left: 18px;
`;

const TopBar = () => {
    return (
        <Bar>
            <Logo src={ImparLogo}/>
        </Bar>
    )
}

export default TopBar