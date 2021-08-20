import { FC } from 'react';
import { Center, Flex, Tooltip, IconButton, Text } from '@chakra-ui/react';
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';

type Props = {
  setPage: (page: number) => void;
  currentPage: number;
  lastPage?: number;
};

const DataTablePagination: FC<Props> = ({
  setPage,
  currentPage,
  lastPage = 1,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  return (
    <Center mt="2">
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            aria-label="First Page"
            onClick={() => setPage(1)}
            isDisabled={isFirstPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            aria-label="Previous Page"
            onClick={() => setPage(currentPage - 1)}
            isDisabled={isFirstPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Text mr="8" mx="2" data-testid="page-counter">
        {`Page ${currentPage} ${lastPage ? `of ${lastPage}` : ''}`}
      </Text>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            aria-label="Next page"
            onClick={() => setPage(currentPage + 1)}
            isDisabled={isLastPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            aria-label="Last Page"
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
