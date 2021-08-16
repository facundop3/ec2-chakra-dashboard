import React from 'react';
import { Box } from '@chakra-ui/react';
import ErrorState from './ErrorState';
import LoadingState from './LoadingState';
import DataTable from '../DataTable';
import { EC2INSTANCE_TABLE_HEADER } from '../constants';

const DashboardTable = ({ isLoading, error, data, refetch }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState refetch={refetch} />;
  }

  return (
    <Box overflow="scroll" w="100vw" h={['60vh', '60vh', '65vh']}>
      <DataTable data={data} columns={EC2INSTANCE_TABLE_HEADER} />
    </Box>
  );
};

export default DashboardTable;
