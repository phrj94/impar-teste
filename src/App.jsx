import React, { useState } from "react";
import styled from "styled-components";
import Content from "./components/content";
import Header from "./components/header";
import TopBar from "./components/topbar";
import Theme from "./style/theme";
import Context from "./context";


const ContainerApp = styled.div`
  width: ${props => props.theme.size.fullViewWidth};
  height: ${props => props.theme.size.full};
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: ${props => props.theme.size.full};
  height: ${props => props.theme.size.full};
  display: flex;
  flex-direction: column;
`;

function App() {
  const [search, setSearch] = useState('');
  const [searchedPokemonCards, setSearchedPokemonCards] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);

  return (
    <Theme>
      <ContainerApp>
        <TopBar />
        <Context.Provider value={{search, setSearch, searchedPokemonCards, setSearchedPokemonCards, pokemonCards, setPokemonCards}}>
          <Main>
            <Header/>
            <Content/>
          </Main>
        </Context.Provider>
      </ContainerApp>
    </Theme>
  );
}

export default App;
