import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, NativeBaseProvider, Image, Modal, Text, Box } from 'native-base';
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

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NativeBaseProvider>
        <AppHeader className="App-header">
          <Image alt='logo' source={{ uri: logo }} height={400} width={400} />
          <p>
            Let's build a Desktop App with
            <br />
            <br />
            <code><I style={{ fontSize: '40px', color: 'palevioletred' }}>Electron</I></code>
          </p>

          <Button
            backgroundColor='transparent'
            onPress={() => setIsOpen((open: boolean) => !open)}
            borderColor='palevioletred'
            borderWidth={0.5}
            width='70%'
            height='50px'
            _pressed={{
              borderColor: 'lightblue'
            }}
          >
            <Text 
              fontSize={24} 
              textTransform='uppercase' 
              italic 
              color='palevioletred'
              padding={0}
              margin={0}
            >
              { isOpen ? 'close' : 'open' }
            </Text>
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
