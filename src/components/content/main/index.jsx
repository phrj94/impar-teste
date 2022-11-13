import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import useOnScreen from "../../../hooks/useOnScreen";

import CardContent from "../../cards"
import Context from "../../../context";

const MainGridContent = styled.section`
    width: 93.3%;
    max-width: 1046px;
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 38px;
    row-gap: 38px;
    justify-content: center;
    margin-bottom: 20px;
`;

const ContentMain = ({ hasMore, isLoading, loadMore, pokemons }) => {
    const { lastCard, isIntersecting, observer } = useOnScreen();
    const {search } = useContext(Context)
    useEffect(() => {
        if (isIntersecting && hasMore && !search ) {
            loadMore();
            observer.disconnect();
        }
    }, [isIntersecting, hasMore, loadMore, search]);
    
    return (
        <MainGridContent>
            {pokemons.map((pokemon, index) => {
                if (index === pokemons.length - 1) return <CardContent key={pokemon.name} lastCard={lastCard} name={pokemon.name} />

                return <CardContent key={pokemon.name} name={pokemon.name} />
            })}

            {isLoading && <li>Loading...</li>}
        </MainGridContent>
    )
}

export default ContentMain;