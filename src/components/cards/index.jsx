import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import Remove from '../../assets/Icon-trash.svg';
import Edit from '../../assets/Icon-edit.svg';

import { getPokemonInfo, getAbility } from '../../api/services'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 234px;
    height: auto;
    border-radius: ${props => props.theme.border.radius.primary};
    box-shadow: 0px 3px 6px #E5E5E5;
    border: ${props => props.theme.border.default};
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
`;

const CardContent = styled.div`
    padding: 8px;
    min-height: 202px;
`;

const CardTopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;

const PokemonSprite = styled.img`
    border-radius: ${props => props.theme.border.radius.circle};
    border: 1px solid ${props => props.theme.colors.grey};
    background: ${props => props.theme.colors.lightGrey}; 
`;

const PokemonName = styled.span`
    font-size: ${props => props.theme.fontSize.large};
    padding: 4px 0;
    text-align: center;
    width: ${props => props.theme.size.full};
    background: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};
    border-radius: 8px 8px 0 0;
    text-transform: capitalize;
    font-family: ${props => props.theme.fontFamily};
`;
const CardTextContent = styled.div`
    display: inline-block;
    width: ${props => props.theme.size.full};
    margin-top: 8px;
    font-family: ${props => props.theme.fontFamily};
`;

const Label = styled.label`
    font-weight: bold; 
    font-size: ${props => props.theme.fontSize.medium};
    margin-right: 4px;
    color: ${props => props.theme.colors.label};
    font-family: ${props => props.theme.fontFamily};
    
`;

const Text = styled.span`
    font-weight: 500;
    font-size: ${props => props.theme.fontSize.xSmall};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fontFamily};
    
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: ${props => props.theme.size.full};
    height: 43px;
    box-shadow: inset 0px 3px 6px #0000000F;
`;

const CardAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
        cursor: pointer;
    }
`;


const CardActionText = styled.span`
    margin-left: 12px;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.colors.text};

    :hover {
        color: ${props => props.remove ? props.theme.colors.alert : props.theme.colors.orange};
    }
`;

const Divider = styled.div`
    color: ${props => props.theme.colors.grey};
    height: 12px;
    width: 1px;
`;


const Card = ({ name, lastCard }) => {
    const [pokemon, setPokemon] = useState();
    
    const notImplemented = 'Funcionalidade não implementada.'

    const mountPokemonCard = useCallback(async () => {
        try {
            const result = await getPokemonInfo(name);
            const abilitity = await getAbility(result.abilities[0].ability.name);
            setPokemon({ 
                    name,
                    id: result.id,
                    img: result.sprites.front_default,
                    main_ability: { name: result.abilities[0].ability.name, effect: getAbilityEffect(abilitity.effect_entries) }
                });
          
        } catch (error) {
            console.error('Something wrong to mount the pokemon card: ', error)
        }
    }, [setPokemon, name])

    const getAbilityEffect = (effects) => {
        let description = "";
        effects.forEach((effect) => {
            if(effect.language.name === "en" )  description = effect.short_effect
        })

        return description;
    }

    useEffect(() => {
        mountPokemonCard();
    }, [mountPokemonCard, setPokemon, name])
    
    
    if (!pokemon) return <></>
    return (
        <CardContainer ref={lastCard}>
            <PokemonName>{pokemon.name}</PokemonName>

            <CardContent>
                <CardTopContent>
                    <PokemonSprite src={pokemon.img} />
                </CardTopContent>
                <CardTextContent>
                    <Label>Ability: </Label>
                    <Text>{pokemon.main_ability.name}</Text>
                </CardTextContent>
                <CardTextContent>
                   <Label>Description: </Label>
                   <Text>{ pokemon.main_ability.effect}</Text> 
                </CardTextContent>
                
            </CardContent>
            <CardFooter>
                <CardAction title={notImplemented}>
                    <img src={Remove} alt="Ícone de remoção"/>
                    <CardActionText remove>Excluir</CardActionText>
                </CardAction>
                <Divider />
                <CardAction title={notImplemented}>
                    <img src={Edit} alt="Ícone de edição"/>
                    <CardActionText>Editar</CardActionText>
                </CardAction>
            </CardFooter>
        </CardContainer>
    )
}

export default Card;