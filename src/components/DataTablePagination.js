import React from 'react';
import { Center, Flex, Tooltip, IconButton, Text } from '@chakra-ui/react';
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';

const DataTablePagination = ({ setPage, currentPage, lastPage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  return (
    <Center mt="2">
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            onClick={() => setPage(1)}
            isDisabled={isFirstPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => setPage(currentPage - 1)}
            isDisabled={isFirstPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Text flexShrink="0" mr={8}>
        Page{' '}
        <Text fontWeight="bold" as="span">
          {currentPage}
          {/* {pageIndex + 1} */}
        </Text>{' '}
        of{' '}
        <Text fontWeight="bold" as="span">
          {lastPage}
          {/* {pageOptions.length} */}
        </Text>
      </Text>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            onClick={() => setPage(currentPage + 1)}
            isDisabled={isLastPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => setPage(lastPage)}
            isDisabled={isLastPage}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Center>
  );
};

export default DataTablePagination;
