import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import TopBar from "./components/topbar";
import Theme from "./style/theme";

const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Theme>
      <ContainerApp>
        <TopBar/>
        <Main>
          <Header></Header>
        </Main>
      </ContainerApp>
    </Theme>
  );
}

export default App;
