import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AllProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </QueryClientProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render, userEvent };
