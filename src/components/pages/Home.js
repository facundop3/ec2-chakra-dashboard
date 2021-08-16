import { useAuth0 } from '@auth0/auth0-react';
import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';
import Dashboard from './Dashboard';
import Landing from './Landing';

const Home = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    isLoading,
    logout: auth0Logout,
    getAccessTokenSilently,
  } = useAuth0();
  const logout = () => auth0Logout({ returnTo: window.location.origin });

  if (isLoading) {
    return (
      <Center>
        <Center>
          Auth 🕵🏻‍♂️ <Spinner ml="2" size="sm" />
        </Center>
      </Center>
    );
  }

  if (isAuthenticated) {
    return (
      <Dashboard
        user={user}
        logout={logout}
        getAccessTokenSilently={getAccessTokenSilently}
      />
    );
  } else {
    return <Landing loginWithRedirect={loginWithRedirect} />;
  }
};

export default Home;
