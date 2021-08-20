import { useAuth0 } from '@auth0/auth0-react';
import { screen } from '@testing-library/react';
import { render, userEvent } from './test-utils';
import Home from '../components/pages/Home';
import getFakeUser from './factory/getFakeUser';

jest.mock('@auth0/auth0-react');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home page', () => {
  test('Renders Home component with get Started button (login button)', () => {
    const loginWithRedirect = jest.fn();
    (useAuth0 as jest.Mock).mockImplementation(() => ({ loginWithRedirect }));
    render(<Home />);

    const getStarted = screen.getByRole('button', { name: /get started/i });

    userEvent.click(getStarted);

    expect(loginWithRedirect).toHaveBeenCalledTimes(1);
  });

  test('Renders Home component loading auth state', () => {
    const loginWithRedirect = jest.fn();
    (useAuth0 as jest.Mock).mockImplementation(() => ({
      loginWithRedirect,
      isLoading: true,
    }));
    render(<Home />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('Welcome logged user by given name', () => {
    const user = getFakeUser();
    const welcomeUserRegExp = new RegExp(`welcome, ${user.given_name}`, 'i');
    const loginWithRedirect = jest.fn();
    const getAccessTokenSilently = jest.fn();
    getAccessTokenSilently.mockImplementation(async () => ({}));

    (useAuth0 as jest.Mock).mockImplementation(() => ({
      loginWithRedirect,
      getAccessTokenSilently,
      isAuthenticated: true,
      user,
    }));

    render(<Home />);

    expect(screen.getByText(welcomeUserRegExp)).toBeInTheDocument();
  });
});
