import React from 'react';
import { View, Image, Text } from 'native-base';
import { Route, Routes } from 'react-router-dom';
import { Header, HeaderLink } from './components';
import kilo from './assets/kilogram.png';
import { Welcome, Docs } from './pages';
import logo from './assets/logo.svg';

const App = () => {

  return (
      <View height='100vh'>
        <Image
          source={{ uri: logo }}
          style={{ tintColor: 'rgba(224, 165, 207, 0.109)' }}
          alt='background'
          width='100%'
          height='100%'
          position='fixed'
          zIndex={0}
        />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/docs' element={<Docs />} />
          </Routes>
          <Header
            title={
              <Text
                margin={0}
                padding={0}
                color='white'
                fontSize={30}
              >
                KiloLab
              </Text>
            }
            subtitle={
              <Text
                margin={0}
                padding={0}
                marginLeft='5px'
                color='rgba(255, 255, 255, 0.5)'
              >
                Putting
                {' '}
                <Image
                  style={{ tintColor: 'white' }}
                  height={5}
                  width={5}
                  source={{ uri: kilo }}
                  alt='kilogram'
                />
                {' '}
                behind your ideas.
              </Text>
            }
            extra={[
              <HeaderLink name='Home' path='/' />,
              <HeaderLink name='Docs' path='/docs' />
            ]}
          />
      </View>
  );
}

export default App;
