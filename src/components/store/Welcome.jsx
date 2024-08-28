import { Box, Grid, Link, Heading, Text, Button} from '@chakra-ui/react';

export const Welcome = () => {
    return(
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
    );
}