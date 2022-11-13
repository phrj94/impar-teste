import React from "react";
import styled from "styled-components";

const EmptyMessage = styled.h2`
    color: ${props => props.theme.colors.text};
    font-size: 48px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    align-self: center;
`;

const EmptySearch = () => {
    return <EmptyMessage>Não foram encontrados resultados para essa busca</EmptyMessage>
}

export default EmptySearch