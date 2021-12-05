import React from 'react';
import styled from 'styled-components';
import { NativeBaseProvider, Image } from 'native-base';
import logo from './logo.svg';

const AppLogo = styled(Image)`
  height: 0vmin;
  pointer-events: none;
  height: 500px;
  width: 500px;
`

const Container = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const I = styled.i`
  font-size: 40px;
  color: palevioletred;
`;

const App = () => {
  return (
    <Container>
      <NativeBaseProvider>
        <AppHeader className="App-header">
          <AppLogo src={logo} height={500} width={500} />
          <p>
            Let's build a Desktop App with
            <br />
            <br />
            <code><I style={{ fontSize: '40px', color: 'palevioletred' }}>Electron</I></code>
          </p>
        </AppHeader>
      </NativeBaseProvider>
    </Container>
  );
}

export default App;
