import {Box, Icon, Text} from '@chakra-ui/react';
import { FaGift } from 'react-icons/fa';

export const ProductCard = () => {
    return (
        <Box
          p={4}
          borderRadius="md"
          textAlign="center"
          boxShadow="md"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Icon as={FaGift} boxSize={16} color="hanPurple" />
          <Text mt={2} fontWeight="bold" color="gray.700">Nombre del Producto</Text>
          <Text mt={1} color="gray.500">$Precio</Text>
        </Box>
    );
}