import React from "react";
import styled from "styled-components";

const PrimaryBtn = styled.button`
    height: 48px;
    width: ${props => props.btnType === "primary" ? '173px' : '165px'};
    background: ${props => props.btnType === "primary" ? props.theme.colors.orange
        : props.btnType === "cancel" ? props.theme.colors.white
            : props.theme.colors.alert};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.btnType === "primary" || props.btnType === "remove" ? props.theme.colors.white
        : props.theme.colors.alert};
    border-radius: 8px;
    opacity: 1;
    border-radius: 8px;
    border: ${props => props.btnType === "cancel" ?  '1px solid ' + props.theme.colors.alert : "none"};
    box-shadow: 0px 3px 6px #92207242;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;

    :hover {
        cursor: not-allowed;
    }
`;

const Button = ({ btnType, btnAction, btnText }) => {
    const notImplemented = "Funcionalidade não implementada"
    return (
        <PrimaryBtn title={notImplemented} btnType={btnType}>{btnText}</PrimaryBtn>
    )
}

export default Button;