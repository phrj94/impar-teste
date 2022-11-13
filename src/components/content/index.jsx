import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "./header";
import ContentMain from "./main";
import { getPokemons } from '../../api/services'

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


    const loadPokemons = useCallback(async () => {
        const result = await getPokemons(callParams.limit, callParams.offset)
        setPokemons((prev) => ([...prev, ...result.results]))
        setHasMore(result.results.length > 0)
        setIsLoading(false)
    }, [setPokemons, setHasMore, setIsLoading, callParams])

    const loadMore = useCallback(() => {
        setCallParams((previous) => ({ ...previous, offset: previous.offset + previous.limit }));
        setIsLoading(true);
    }, [setCallParams, setIsLoading])

    useEffect(() => { loadPokemons() }, [loadPokemons, setPokemons, setHasMore, setIsLoading, callParams])

    return (
        <MainContent>
            <ContentHeader />
            {pokemons.length && (
                <ContentMain
                    hasMore={hasMore}
                    isLoading={isLoading}
                    loadMore={loadMore}
                    pokemons={pokemons}
                />
            )}
        </MainContent>
    )
}

export default Content;