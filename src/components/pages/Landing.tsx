import { FC } from 'react';
import { Center, Flex, Text, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

type Props = {
  loginWithRedirect: () => void;
};

const Landing: FC<Props> = ({ loginWithRedirect }) => {
  return (
    <Center h="full" p={3}>
      <Flex direction="column">
        <Text fontSize={['4xl', '5xl', '7xl']}>
          A simple EC2 instances viewer 👀
        </Text>
        <Center>
          <Button
            onClick={loginWithRedirect}
            width="fit-content"
            rightIcon={<ArrowForwardIcon />}
          >
            Get started
          </Button>
        </Center>
      </Flex>
    </Center>
  );
};

export default Landing;
