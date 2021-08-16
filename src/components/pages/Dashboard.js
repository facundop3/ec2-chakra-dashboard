import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';
import {
  Flex,
  Text,
  Button,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowBackIcon, RepeatIcon } from '@chakra-ui/icons';
import DashboardTable from '../DashboardTable';
import useTokenPromise from '../../hooks/useTokenPromise';
import { getInstancesData } from '../../api';
import DataTablePagination from '../DataTablePagination';

const Dashboard = ({ user, logout }) => {
  const [page, setPage] = useState(1);
  const token = useTokenPromise();
  const { isLoading, error, data, refetch, remove } = useQuery('repoData', () =>
    getInstancesData(token, page)
  );

  const refreshData = useCallback(() => {
    remove();
    refetch();
  }, [refetch, remove]);

  useEffect(() => {
    refreshData();
    console.log('hey');
  }, [page, refreshData]);

  const lastPage = data?.lastPage;
  const isMobile = useBreakpointValue({ sm: true, base: true, md: false });

  return (
    <Flex direction="column">
      {user?.given_name ? <Text>Welcome, {user.given_name}</Text> : null}
      <Text>
        <Button
          onClick={logout}
          width="fit-content"
          leftIcon={<ArrowBackIcon />}
          mx="4"
        >
          logout
        </Button>
        {!isMobile ? '🛠 EC2 instances dashboard 🛠' : ''}
      </Text>
      <Center>
        <Flex direction="column">
          <DashboardTable
            key={page}
            isLoading={isLoading}
            error={error}
            data={data?.instances}
            refetch={refetch}
            setPage={setPage}
          />

          <DataTablePagination
            lastPage={lastPage}
            currentPage={page}
            setPage={setPage}
          />
          <Center mt="2">
            <Button
              px="8"
              onClick={refreshData}
              width="fit-content"
              rightIcon={<RepeatIcon />}
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
