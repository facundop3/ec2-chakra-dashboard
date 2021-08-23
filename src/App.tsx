import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './components/pages/Home';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box textAlign="center" h="100vh" overflow="hidden">
          <ColorModeSwitcher />
          <Home />
        </Box>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
