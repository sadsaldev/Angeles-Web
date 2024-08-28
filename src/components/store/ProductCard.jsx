import {Box, Icon, Text, Image} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/store/product/${product.id}`);
  };

    return (
        <Box onClick={handleClick} cursor='pointer'
          p={4}
          borderRadius="md"
          textAlign="center"
          boxShadow="md"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image src={product.image} alt={product.title} boxSize={170} objectFit="cover" mx="auto" />
          <Text mt={2} fontWeight="bold" color="gray.700">{product.title}</Text>
          <Text mt={1} color="gray.500">COP ${product.price}</Text>
        </Box>
    );
}