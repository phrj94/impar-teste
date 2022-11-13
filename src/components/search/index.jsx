import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from '../../assets/lupa.svg'

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
   :hover {
        cursor: pointer;
    }
`;


const SearchBar = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: ${props => props.theme.borderDefault};
    
    padding-left: 28px;
    :focus-visible {
        outline: none;
       
    }
    :focus {
         cursor: text;
    }
`;

const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <SearchContainer>
            <SearchBar type="search" placeholder="Digite aqui sua busca..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <SearchIcon />
        </SearchContainer>
    )
}

export default Search;