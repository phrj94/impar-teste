import React from "react";
import styled from "styled-components";
import NewCardButton from '../../buttons/primary'

const MainHeader = styled.section`
  width: 93.9%;
  max-width: 1046px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
    color: ${props => props.theme.colors.primay};
    font-size: 32px;
`;

const ContentHeader = () => {
    return (
        <MainHeader>
            <Title>Resultado de busca</Title>
            <NewCardButton btnType="primary" btnText="Novo Card" btnAction={() => alert("Ação não implementada")} />
        </MainHeader>
    )
}

export default ContentHeader;