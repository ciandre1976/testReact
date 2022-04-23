import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
  Input,
  Box,
  SimpleGrid,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { FaSearch } from 'react-icons/fa';

const url = 'https://api.cdgm.energysage.com/api/v1/projects/search/';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const searchurl = `https://api.cdgm.energysage.com/api/v1/projects/search/?state=${search.toUpperCase()}`;
  useEffect(() => {
    axios.get(url).then(res => {
      setFetchData(res);
    });
  }, []);
  const { data } = fetchData;

  const searchData = searchResult?.data;

  const searchDataToShow = searchData?.map(s => (
    <Box bg="blue.100">
      <Text>Name:{s.name}</Text>
      <Text>Expected Go Live Date:{s.expected_go_live}</Text>
      <Text> Average Developer Review Score{s.average_review_score}</Text>
    </Box>
  ));

  const result = data?.filter((el, index) => {
    return el?.is_active === true;
  });

  const showResult = result?.map(r => (
    <Box bg="orange.100" borderRadius={3}>
      <Text>Name:{r.name}</Text>
      <Text>Expected Go Live Date:{r.expected_go_live}</Text>
      <Text> Average Developer Review Score{r.average_review_score}</Text>
    </Box>
  ));

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(searchurl).then(res => {
      setSearchResult(res);
    });
    setSearch('');
  };

  const handleChange = e => {
    setSearch(() => e.target.value);
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={2}>
        <Header />
        <Text>Search by State:</Text>
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} />
        </form>
        <Box>
          <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
            {' '}
            {searchDataToShow}
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
          {' '}
          {showResult}
        </SimpleGrid>
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
