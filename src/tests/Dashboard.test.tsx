import { useAuth0 } from '@auth0/auth0-react';
import { screen } from '@testing-library/react';
import * as reactQuery from 'react-query';
import { render, userEvent, waitFor } from './test-utils';
import Dashboard from '../components/pages/Dashboard';
import getFakeUser from './factory/getFakeUser';
import { getInstancesData } from '../api';
import getFakeEc2Instances from './factory/getFakeEc2Instances';

jest.mock('../api');

jest.mock('@auth0/auth0-react');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Dashboard', () => {
  test('Logout button', () => {
    const user = getFakeUser();
    const loginWithRedirect = jest.fn();
    const getAccessTokenSilently = jest.fn();
    const logout = jest.fn();
    getAccessTokenSilently.mockImplementation(async () => ({}));
    (useAuth0 as jest.Mock).mockImplementation(() => ({
      loginWithRedirect,
      getAccessTokenSilently,
      isAuthenticated: true,
    }));

    render(<Dashboard logout={logout} user={user} />);

    const logoutButton = screen.getByRole('button', { name: /logout/i });

    userEvent.click(logoutButton);
    expect(logout).toHaveBeenCalledTimes(1);
  });

  test('Get instances data and display it', async () => {
    const user = getFakeUser();
    const ec2Instances = getFakeEc2Instances();
    const { lastPage } = ec2Instances;
    const { instances } = ec2Instances;
    const loginWithRedirect = jest.fn();
    const getAccessTokenSilently = jest.fn();
    const logout = jest.fn();
    const paginationRegExp = new RegExp(`page 1 of ${lastPage}`, 'i');

    (getInstancesData as jest.Mock).mockImplementation(
      async () => ec2Instances
    );
    getAccessTokenSilently.mockImplementation(async () => ({}));
    (useAuth0 as jest.Mock).mockImplementation(() => ({
      loginWithRedirect,
      getAccessTokenSilently,
      isAuthenticated: true,
    }));

    render(<Dashboard logout={logout} user={user} />);

    const loadingSpinner = screen.queryByText(/loading.../i);

    await waitFor(() => expect(loadingSpinner).not.toBeInTheDocument());

    validateAllInstancesData(instances);

    expect(screen.getByText(paginationRegExp)).toBeInTheDocument();

    expect(getInstancesData).toHaveBeenCalled();
  });

  test('Click Refresh data', async () => {
    const user = getFakeUser();
    const ec2Instances = getFakeEc2Instances();
    const loginWithRedirect = jest.fn();
    const getAccessTokenSilently = jest.fn();
    const logout = jest.fn();
    const refetch = jest.fn();
    const remove = jest.fn();

    jest.spyOn(reactQuery, 'useQuery');
    (reactQuery.useQuery as jest.Mock).mockImplementation(() => ({
      refetch,
      remove,
      data: ec2Instances,
    }));

    (getInstancesData as jest.Mock).mockImplementation(
      async () => ec2Instances
    );
    getAccessTokenSilently.mockImplementation(async () => ({}));
    (useAuth0 as jest.Mock).mockImplementation(() => ({
      loginWithRedirect,
      getAccessTokenSilently,
      isAuthenticated: true,
    }));

    render(<Dashboard logout={logout} user={user} />);

    const refreshDataButton = screen.getByRole('button', {
      name: /refresh data/i,
    });

    refetch.mockClear();
    remove.mockClear();

    userEvent.click(refreshDataButton);

    expect(refetch).toHaveBeenCalledTimes(1);
    expect(remove).toHaveBeenCalledTimes(1);
  });

  test('Clicks try again on on error', async () => {
    const user = getFakeUser();
    const ec2Instances = getFakeEc2Instances();
    const loginWithRedirect = jest.fn();
    const getAccessTokenSilently = jest.fn();
    const logout = jest.fn();
    const refetch = jest.fn();
    const remove = jest.fn();

    jest.spyOn(reactQuery, 'useQuery');
    (reactQuery.useQuery as jest.Mock).mockImplementation(() => ({
      refetch,
      remove,
      error: true,
    }));

    (getInstancesData as jest.Mock).mockImplementation(
      async () => ec2Instances
    );
    getAccessTokenSilently.mockImplementation(async () => ({}));
    (useAuth0 as jest.Mock).mockImplementation(() => ({
      loginWithRedirect,
      getAccessTokenSilently,
      isAuthenticated: true,
    }));

    render(<Dashboard logout={logout} user={user} />);

    const tryAgainButton = screen.getByRole('button', {
      name: /try again/i,
    });

    refetch.mockClear();
    remove.mockClear();

    userEvent.click(tryAgainButton);

    expect(refetch).toHaveBeenCalledTimes(1);
    expect(remove).toHaveBeenCalledTimes(1);
  });
});

function validateAllInstancesData(instances = []) {
  instances.forEach(instanceData => {
    const instanceDataKeys = Object.keys(instanceData);
    instanceDataKeys.forEach(key => {
      expect(screen.getAllByText(instanceData[key]).length).not.toBeLessThan(0);
    });
  });
}
