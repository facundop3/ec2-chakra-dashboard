import { useAuth0 } from '@auth0/auth0-react';

const { REACT_APP_AUTH0_AUDIENCE } = process.env;

const useTokenPromise = () => {
  const { getAccessTokenSilently } = useAuth0();

  return getAccessTokenSilently({
    audience: REACT_APP_AUTH0_AUDIENCE,
  });
};

export default useTokenPromise;
