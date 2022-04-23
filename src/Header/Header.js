import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box
      borderRadius={3}
      background="blue.100"
      margin="auto"
      w="100%"
      h="50px"
      p={5}
    >
      <Text color="orange.800" fontFamily="sans-serif">
        energysage
      </Text>
    </Box>
  );
};
