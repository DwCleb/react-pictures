import { extendTheme } from '@chakra-ui/react';
import global from './globals';

const theme = extendTheme({
  styles: {
    global,
  },
});

export default theme;
