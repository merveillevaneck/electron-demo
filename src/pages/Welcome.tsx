import React, { useState } from 'react'
import { Text, Button } from 'native-base';
import { Page, Journey, useJourneyIndex } from '../components';

export interface WelcomeProps {

}

export const Welcome: React.FC<WelcomeProps> = (props) => {

  const [position, next] = useJourneyIndex(2);

  return (
        <Page fadeInDelay={500}>
          {/* <Image alt='logo' source={{ uri: logo }} height={400} width={400} /> */}
          <Journey index={position}>
            <Page>
              <Text>something</Text>
              <Text>else</Text>
            </Page>
          </Journey>
        </Page>
  );
}

export default Welcome;

