import React from 'react';
import { useQuery } from 'react-query';
import { Flex, Text, Button, Center } from '@chakra-ui/react';
import { ArrowBackIcon, RepeatIcon } from '@chakra-ui/icons';
import DashboardTable from '../DashboardTable';
import useTokenPromise from '../../hooks/useTokenPromise';
import { getInstancesData } from '../../api';

const Dashboard = ({ user, logout }) => {
  const token = useTokenPromise();
  const { isLoading, error, data, refetch } = useQuery('repoData', () =>
    getInstancesData(token)
  );

  return (
    <Flex direction="column">
      {user?.given_name ? <Text>Welcome, {user.given_name}</Text> : null}
      <Text>🛠 EC2 instances dashboard 🛠</Text>
      <Center>
        <Flex direction="column">
          <DashboardTable
            isLoading={isLoading}
            error={error}
            data={data}
            refetch={refetch}
          />

          <Center>
            <Button
              onClick={logout}
              width="fit-content"
              leftIcon={<ArrowBackIcon />}
              m="4"
            >
              logout
            </Button>
            <Button
              onClick={() => refetch({ throwOnError: true })}
              width="fit-content"
              rightIcon={<RepeatIcon />}
              m="4"
            >
              Refresh data
            </Button>
          </Center>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Dashboard;
