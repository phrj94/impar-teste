import React from "react";
import styled from "styled-components";
import Theme from "./style/theme";

const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.background};
`;

function App() {
  return (
    <Theme>
      <ContainerApp></ContainerApp>
    </Theme>
  );
}

export default App;
