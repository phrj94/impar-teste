import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { ReactComponent as RemoveIcon } from '../../assets/Icon-trash.svg';
import { ReactComponent as EditIcon } from '../../assets/Icon-edit.svg';

import { getPokemonInfo, getAbility } from '../../api/services'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 234px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    background: #FFFFFF 0% 0% no-repeat padding-box;
   
    opacity: 1;
`;

const CardContent = styled.div`
    padding: 8px;
`;

const CardTopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;

const PokemonSprite = styled.img`
    border-radius: 50%;
    border: ${props => props.theme.borderDefault};
    background: ${props => props.theme.colors.border};
`;

const PokemonName = styled.span`
    font-size: 18px;
    padding: 4px 0;
    text-align: center;
    width: 100%;
    background: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};
    border-radius: 8px 8px 0 0;
`;

const CardTextContent = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 8px;
`;
const Label = styled.label`
    font-weight: bold;
    font-size: 16px;
    margin-right: 4px;
`;

const Text = styled.span`
    font-weight: 500;
    font-size: 14px;
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
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

const CardActionRemove = styled(RemoveIcon)`
    color: ${props => props.theme.colors.alert};
`;

const CardActionEdit = styled(EditIcon)`
    color: ${props => props.theme.colors.orange};
`;

const CardActionText = styled.span`
    margin-left: 12px;
`;

const Divider = styled.div`
    color: ${props => props.theme.colors.grey};
    height: 12px;
    width: 1px;
`;


const Card = ({ name, lastCard }) => {
    const [pokemon, setPokemon] = useState();

    const mountPokemonCard = useCallback(async () => {
        try {
            const result = await getPokemonInfo(name);
            const abilitity = await getAbility(result.abilities[0].ability.name);
            setPokemon({ 
                    name,
                    img: result.sprites.front_default,
                    main_ability: { name: result.abilities[0].ability.name, effect: getAbilityEffect(abilitity.effect_entries) } });
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
                <CardAction>
                    <CardActionRemove />
                    <CardActionText>Excluir</CardActionText>
                </CardAction>
                <Divider />
                <CardAction>
                    <CardActionEdit />
                    <CardActionText>Editar</CardActionText>
                </CardAction>
            </CardFooter>
        </CardContainer>
    )
}

export default Card;