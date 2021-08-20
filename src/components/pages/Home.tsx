import { useAuth0 } from '@auth0/auth0-react';
import { User } from '@auth0/auth0-spa-js';
import { Center, Spinner } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import Landing from './Landing';

const Home = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    isLoading,
    logout: auth0Logout,
  } = useAuth0<User>();
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

  if (isAuthenticated && user) {
    return <Dashboard user={user} logout={logout} />;
  } else {
    return <Landing loginWithRedirect={loginWithRedirect} />;
  }
};

export default Home;
