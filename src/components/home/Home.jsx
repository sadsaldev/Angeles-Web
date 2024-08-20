import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box as="section" h="90vh">
      <Flex h="100%" direction={{ base: "column", md: "row" }}>

        {/* Contenedor 1 - Lado izquierdo */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingLeft={20}
          paddingRight={20}
          color="black"
        >
          <Box maxW="lg">
            <Heading as="h1" mb={10} style={{ fontSize:'4em'}} className="main-title">
              Obtén hermosos detalles para cualquier ocasión
            </Heading>
            <Text fontSize="lg">
              <strong>
                Ofrecemos una gran variedad de regalos y detalles aptos para
                cualquier ocasión,
              </strong>{" "}
              también puedes personalizar el tuyo como desees con nuestra rápida
              atención <br /> <strong>vía WhatsApp</strong>.
            </Text>
          </Box>
        </Box>

        {/* Contenedor 2 - Lado derecho */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingLeft={20}
          paddingRight={20}
        >
          <Box maxW="lg" textAlign="center">
            <Box mb={10}>
                <img src="/assets/img/logo-slogan.png"/>
            </Box>
            <Text fontSize="lg" mb={10} textAlign="end">
              Visita nuestra Tienda Online o Contáctanos para{" "}
              <strong>
                <i style={{color: 'var(--royal-blue)'}}>alegrar el alma</i>
              </strong>{" "}
              de aquella persona especial con nuestros increíbles y únicos
              detalles.
            </Text>
                <Box display="flex" justifyContent="end"alignItems="center">
                    <Button className="mr-4 main-button" size="lg" mb={{ base: 4, md: 0 }}>Pide Ahora</Button>
                    <Button className="main-button" size="lg" mb={{ base: 4, md: 0 }}>Contáctanos</Button>
                </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
