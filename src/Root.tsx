import React from 'react'
import { NativeBaseProvider } from 'native-base';
import { BrowserRouter as Router } from 'react-router-dom';

export const Root: React.FC<any> = ({ element }) => {
    return (
        <NativeBaseProvider>
            <Router>
                {element}
            </Router>
        </NativeBaseProvider>
    )
}
