import {useState, useEffect} from 'react';
import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import {Outlet, useLocation} from 'react-router-dom';

export const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

  //Cambiar el estado dependiendo de la ruta actual
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup'){
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [location]);

  return (
    <Box as="section">
      <Flex
        h="100%"
        direction={{ base: "column", md: "column", lg: "row", sm:'column' }} // Cambié a 'column' en md
        align="center"
        justify="center"
        p={{ base: 4, md: 10 }}
      >
        {/* Contenedor 1 - Lado izquierdo */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={{ base: 4, md: 8 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box maxW="100%">
            {!showForm ? (
              <>
                <Heading
                  as="h1"
                  mb={6}
                  className="main-title"
                  fontSize={{ base: "3.5em", sm: "3.5em", md: "3.5em", lg: "4em" }}
                  transition="font-size 0.3s ease-in-out"
                >
                  Obtén hermosos detalles para cualquier ocasión
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                  <strong>
                    Ofrecemos una gran variedad de regalos y detalles aptos para
                    cualquier ocasión,
                  </strong>{" "}
                  también puedes personalizar el tuyo como desees con nuestra rápida
                  atención{" "}
                  <strong style={{ color: "var(--royal-blue)" }}>vía WhatsApp</strong>.
                </Text>
              </>
            ):(
              <Outlet />
            )}
          </Box>
        </Box>

        {/* Contenedor 2 - Lado derecho */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={{ base: 4, md: 8 }}
          textAlign={{ base: "center", md: "end" }}
        >
          <Box maxW="100%">
            <Box>
              <img
                src="/assets/img/logo-slogan.svg"
                alt="Logo con Slogan"
                width="800"
              />
            </Box>
            <Text fontSize={{ base: "md", md: "lg" }} mb={6}>
              Visita nuestra Tienda Online o Contáctanos para{" "}
              <strong>
                <i style={{ color: "var(--royal-blue)" }}>alegrar el alma</i>
              </strong>{" "}
              de aquella persona especial con nuestros increíbles y únicos
              detalles.
            </Text>
            <Box display="flex" justifyContent={{ base: "center", md: "end" }} alignItems="center">

              <Button className="main-b" size="lg"mr={4}>Pide Ahora</Button>

              <Link href="https://wa.link/tj5hq1" isExternal aria-label="WhatsApp">
                <Button className="main-b" size="lg">Contáctanos</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
