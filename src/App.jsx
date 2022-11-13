import React from "react";
import styled from "styled-components";
import Content from "./components/content";
import Header from "./components/header";
import TopBar from "./components/topbar";
import Theme from "./style/theme";

const ContainerApp = styled.div`
  width: 100vw;
  height: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
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
          <Content/>
        </Main>
      </ContainerApp>
    </Theme>
  );
}

export default App;
