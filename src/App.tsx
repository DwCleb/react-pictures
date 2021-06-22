import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { theme } from './theme';

export default function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}
