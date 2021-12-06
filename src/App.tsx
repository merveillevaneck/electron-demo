import React, { useState } from 'react';
import styled from 'styled-components';
import { Pressable, NativeBaseProvider, Image, Modal, Text, Box } from 'native-base';
import logo from './logo.svg';

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

const Button = styled.button`
  height: 60px;
  width: 70%;
  background-color: transparent;
  color: palevioletred;
  border: 0.5px solid palevioletred;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #282c34;
  font-size: 24px;
  text-transform: uppercase;
`;

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NativeBaseProvider>
        <AppHeader className="App-header">
          <Image alt='logo' source={logo} height={400} width={400} />
          <p>
            Let's build a Desktop App with
            <br />
            <br />
            <code><I style={{ fontSize: '40px', color: 'palevioletred' }}>Electron</I></code>
          </p>

          <Button onClick={() => setIsOpen((open: boolean) => !open)}>
            { isOpen ? 'close' : 'open' }
          </Button>
          
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Box 
              justifyContent="center" 
              alignItems="center" 
              backgroundColor='palevioletred'
              width={100}
              height={100}
              borderRadius={5}
              shadow={5}
            >
              <Text color='white'>hi</Text>
            </Box>
          </Modal>
        </AppHeader>
      </NativeBaseProvider>
    </Container>
  );
}

export default App;
