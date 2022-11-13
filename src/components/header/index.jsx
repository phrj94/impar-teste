import React from "react";
import styled from "styled-components";
import HeaderBackground from '../../assets/fundo-busca.png'
import Search from "../search";

const HeaderContainer = styled.header`
    background-image: url(${HeaderBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 261px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const Header = () => (
    <HeaderContainer>
        <Search />
    </HeaderContainer>
)


export default Header;