import { Box, Heading } from '@chakra-ui/react';

const Error = () => {
  return (
    <Box padding="50px">
      <Heading as="p" size="sm" color="red">
        Ha ocurrido un error
      </Heading>
    </Box>
  );
};

export default Error;
