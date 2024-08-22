import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { SlideShow } from "./SlideShow";
import { SlDiamond } from "react-icons/sl";

export const AboutUs = () => {
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
            <Heading
              as="h1"
              mb={6}
              className="main-title"
              fontSize={{ base: "2em", sm: "2em", md: "2em", lg: "2em" }}
              transition="font-size 0.3s ease-in-out"
            >
              Nuestro Colorido Mundo
            </Heading>

            <Text fontSize={{ base: "1.5em", sm: "1.5em", md: "1.5em", lg: "1.5em" }} color="black" mb={3}>
              <strong style={{ color: "var(--royal-blue)" }}>¡Conócenos! </strong>
              Nosotros somos
              <strong style={{ color: "var(--royal-blue)" }}> AngeleS</strong>
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} color="black">
             Somos una micro-empresa Colombiana ubicada en la ciudad de Dosquebradas en Risaralda. Nos dedicamos a fabricar y comercializar <strong>detalles y regalos para toda ocasión</strong>, también ofrecemos el servicio de <strong>organizaciones de eventos</strong> como fiestas de cumpleaños, reuniones, celebraciones de fechas especiales, etc. 
             <br />
             <br />
             Hemos iniciado este emprendimiento el mes de septiembre de 2020. Con el paso del tiempo <strong>hemos crecido en gran medida</strong> gracias a la dedicación y esfuerzo de nuestro equipo y a las personas que <strong>han confiado</strong> en nosotros contratando nuestros servicios, comprando nuestros productos, o <strong>dándonos su apoyo</strong>.
            </Text>
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
            <SlideShow />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
