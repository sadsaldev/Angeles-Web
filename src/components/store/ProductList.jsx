import { useState, useEffect } from 'react';
import { Box, Grid, Link, Heading, Text, Button, Flex, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent,DrawerCloseButton,DrawerHeader, DrawerBody, VStack} from '@chakra-ui/react';
import { FaBars, FaFilter } from 'react-icons/fa';
import { ProductFilter } from './ProductFilter';
import { ProductCard } from './ProductCard';
import data from '../../products/Products.json';

export const ProductList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
        console.log(data);
    }, []);

    const categories = {
        "recomendado": "Recomendados para ti",
        "desayunos-sorpresa": "Desayunos Sorpresa",
        "detalles-estandar": "Detalles Estándar",
        "cajas-sorpresa": "Cajas Sorpresa",
        "variaciones": "Variaciones"
      };

    return(
        <Flex>
        {/* Botón del menú de filtro para pantallas pequeñas */}
        <IconButton
          display={{ base: 'flex', md: 'flex', lg: 'none' }}
          icon={<FaFilter />}
          onClick={onOpen}
          aria-label="Open Menu"
          size="lg"
          variant="outline"
          mr={6}
        />

        {/* Filtro de productos */}
        <Box display={{ base: 'none', lg: 'block' }}>
          <ProductFilter />
        </Box>

        {/* Menú lateral para pantallas pequeñas */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <ProductFilter />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Lista de productos */}
        <Box flex="1" ml={{ lg: 10 }}>
            {Object.entries(categories).map(([category, title]) => (
                <Box key={category} mb={10}>
                    <Heading size="md" style={{color: 'var(--royal-blue)'}} mb={4} textAlign={{base: 'center', md:'start'}}>
                        {title}
                    </Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mb={10}>
                        {products
                            .filter(product => product.category === category)
                            .map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </Grid>
                </Box>
            ))}
          
        </Box>
      </Flex>
    )
}