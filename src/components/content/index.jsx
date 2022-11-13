import React, { useCallback, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ContentHeader from "./header";
import ContentMain from "./main";
import { getPokemons } from '../../api/services'
import Context from "../../context";
import EmptySearch from "../search/emptySearch";

const MainContent = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = () => {
    const [pokemons, setPokemons] = useState([]);
    const [callParams, setCallParams] = useState({ limit: 20, offset: 0 })
    const [hasMore, setHasMore] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { search, searchedPokemonCards, setPokemonCards, pokemonCards } = useContext(Context)


    const loadPokemons = useCallback(async () => {
        const result = await getPokemons(callParams.limit, callParams.offset)
        setPokemons((prev) => ([...prev, ...result.results]))
        setPokemonCards((prev) => ([...prev, ...result.results]))
        setHasMore(result.results.length > 0)
        setIsLoading(false)
    }, [setPokemons, setHasMore, setIsLoading, setPokemonCards, callParams])

    const loadMore = useCallback(() => {
        setCallParams((previous) => ({ ...previous, offset: previous.offset + previous.limit }));
        setIsLoading(true);
    }, [setCallParams, setIsLoading])

    useEffect(() => { loadPokemons() }, [loadPokemons, setHasMore, setIsLoading, callParams])


    useEffect(() => {
        if (search) setPokemons(searchedPokemonCards)
        else setPokemons(pokemonCards)
    }, [search, searchedPokemonCards, pokemonCards])


    return (
        <MainContent>
            <ContentHeader />

            {pokemons.length ? (
                <ContentMain
                    hasMore={hasMore}
                    isLoading={isLoading}
                    loadMore={loadMore}
                    pokemons={pokemons}
                />
            ) : <EmptySearch/>}
        </MainContent>
    )
}

export default Content;