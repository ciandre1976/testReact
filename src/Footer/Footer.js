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

export const Footer = () => {
  return (
    <Box
      w="100%"
      p={5}
      borderRadius={3}
      background="gray"
      margin={5}
      ml="10%"
      color="white"
      h="5%"
      display="flex"
    >
      <Text>year | </Text>
      <Text size="xl">2022</Text>
    </Box>
  );
};
