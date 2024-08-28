import { Box} from '@chakra-ui/react';
import { Welcome } from './Welcome';
import { ProductList } from './ProductList';

export const Main = () => {
    
  return (
    <Box p={10}>
      
      <Welcome />
      <ProductList />

    </Box>
  );
};
