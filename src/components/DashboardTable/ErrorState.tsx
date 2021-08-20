import { FC } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

type Props = {
  refetch: () => void;
};

const ErrorState: FC<Props> = ({ refetch }) => {
  return (
    <Text>
      Whoops something went wrong
      {refetch && (
        <Button
          onClick={refetch}
          width="fit-content"
          rightIcon={<RepeatIcon />}
          m="4"
        >
          try again
        </Button>
      )}
    </Text>
  );
};

export default ErrorState;
