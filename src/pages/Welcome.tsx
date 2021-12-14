import React, { useState } from 'react'
import { Text, Button } from 'native-base';
import { Page } from '../components';

export interface WelcomeProps {

}

export const Welcome: React.FC<WelcomeProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
        <Page fadeInDelay={500}>
          {/* <Image alt='logo' source={{ uri: logo }} height={400} width={400} /> */}
          <Text fontSize={20} color='#fff' textAlign='center'>
            Let's build a Desktop App with
            <br />
            <br />
            <code>
                <Text
                    italic
                    fontSize={40}
                    color='palevioletred'
                    textAlign='center'
                    alignSelf='center'
                    backgroundColor='black'
                >
                    Electron
                </Text>
            </code>
          </Text>

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
            marginTop='20px'
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
        
        </Page>
  );
}

export default Welcome;

