import React, { useCallback, useContext, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from '../../assets/lupa.svg'
import Context from "../../context";

const SearchContainer = styled.div`
    width: 93.9%;
    max-width: 1046px;
    height: 75px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


const SearchIcon = styled(Icon)`
   position: absolute;
   padding-right: 25px;
   
`;


const SearchBar = styled.input`
    width: ${props => props.theme.size.full};
    height: ${props => props.theme.size.full};
    border-radius: ${props => props.theme.border.radius.primary};
    border: ${props => props.theme.border.default};
    font-size: ${props => props.theme.fontSize.xLarge};
    padding-left: 28px;
    padding-right: 110px;

    :focus-visible {
        outline: none;
       
    }
    :focus {
         cursor: text;
    }
`;

const Search = () => {
    const { search, setSearch, pokemonCards, setSearchedPokemonCards } = useContext(Context);

    const getPokemonsByName = useCallback(() => {

        const pokemonsByName = pokemonCards.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

        return pokemonsByName;
    }, [pokemonCards, search])

    useEffect(() => {
        if (!search) setSearchedPokemonCards([]);
        else setSearchedPokemonCards(getPokemonsByName());
    }, [search])

    return (
        <SearchContainer>
            <SearchBar type="search" placeholder="Digite aqui sua busca..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <SearchIcon />
        </SearchContainer>
    )
}

export default Search;