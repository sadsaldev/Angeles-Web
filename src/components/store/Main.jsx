import { Box, Grid, Link, Heading, Text, Button, Flex, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent,DrawerCloseButton,DrawerHeader, DrawerBody, VStack} from '@chakra-ui/react';
import { FaBars, FaFilter } from 'react-icons/fa';
import { ProductFilter } from './ProductFilter';
import { ProductCard } from './ProductCard';

export const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={10}>
      {/* Contenedor de bienvenida y mensaje personalizado */}
      <Grid templateColumns={{ base: "1fr", md: "1fr", sm:"1fr", lg:"1fr 1fr" }} gap={4} mb={8}>
        <Box style={{backgroundColor:'var(--lavender)'}} p={10} margin={{base:5, md:10}} borderRadius="md">
          <Heading size="lg" className='main-title'>Bienvenido/a la nueva Tienda Online oficial de AngeleS!</Heading>
          <Text mt={4} color='black'>
            Aquí podrás encontrar todos nuestros productos, puedes filtrarlos por precio, categoría o festividad, y acceder al detalle si deseas realizar tu pedido.
          </Text>
        </Box>
        <Box p={5} margin={{base:5, md:10}} textAlign="center">
          <Heading className='main-title' size="lg" mb={4}>¿Buscas algo más personalizado?</Heading>
          <Box display='flex' flexDirection={{ base: "column", md: "row"}} gap={4}>
            <Box width={{base:'100%', md:'50%'}}>
             <Text mt={4} color="black">
                Puedes modificar la paleta de colores, artículos, contenido de la tarjeta y demás, de cada uno de nuestros productos al clickear <strong>“Ver Producto”</strong>
             </Text>
            </Box>
            <Box width={{base:'100%', md:'50%'}}>
             <Text mt={4} color="black">
                O chatea con nosotros para asistirte y así crear el detalle que <strong>más se ajuste a tus expectativas</strong>
             </Text>
             <Link href="https://wa.link/tj5hq1" isExternal aria-label="WhatsApp">
              <Button mt={4} className="main-b" size="md">Chatea Aquí</Button>
             </Link>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Flex>
        {/* Botón del menú de hamburguesa para pantallas pequeñas */}
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
          <Heading size="md" style={{color: 'var(--royal-blue)'}} mb={4} textAlign={{base: 'center', md:'start'}}>Recomendados para ti</Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mb={10}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>

          <Heading size="md" style={{color: 'var(--royal-blue)'}} my={6} textAlign={{base: 'center', md:'start'}}>Desayunos Sorpresa</Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mb={10}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>

          <Heading size="md" style={{color: 'var(--royal-blue)'}} my={6} textAlign={{base: 'center', md:'start'}}>Detalles Estándar</Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mb={10}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>

          <Heading size="md" style={{color: 'var(--royal-blue)'}} my={6} textAlign={{base: 'center', md:'start'}}>Cajas Sorpresa</Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mb={10}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>

          <Heading size="md" style={{color: 'var(--royal-blue)'}} my={6} textAlign={{sm: 'center', md:'start'}}>Variaciones</Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mb={10}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};
