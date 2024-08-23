import { Box, Flex, Heading, Text, Button, Link, IconButton } from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
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
            <Box>
              <Heading as="h1" mb={6} className="main-title" fontSize={{ base: "2em", sm: "2em", md: "2em", lg: "2.5em" }} transition="font-size 0.3s ease-in-out">
                Contáctanos
              </Heading>
              <hr className="line"/>
            </Box>

            <Box display='flex' flexDirection='column' gap={5} paddingTop={10} paddingBottom={10}>
              <Box display='flex' alignItems='center' gap={2}>
                <IconButton 
                aria-label="Mail"
                icon={<FaEnvelope size={32} color='black'/>}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                />
                <Link href="mailto:detallesyregalosangeles@gmail.com" isExternal aria-label="Mail">
                  <Text fontSize={{ base: "md", md: "lg" }} color="black">detallesyregalosangeles@gmail.com</Text>
                </Link>
              </Box>

              <Box display='flex' alignItems='center' gap={2}>
                <IconButton 
                aria-label="WhatsApp"
                icon={<FaWhatsapp size={32} color='black'/>}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                />
                <Link href="https://wa.link/tj5hq1" isExternal aria-label="WhatsApp">
                  <Text fontSize={{ base: "md", md: "lg" }} color="black">+57 3113281991</Text>
                </Link>
              </Box>

              <Box display='flex' alignItems='center' gap={2}>
                <IconButton 
                aria-label="Instagram"
                icon={<FaInstagram size={32} color='black'/>}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                />
                <Link href="https://www.instagram.com/angelesdetalles__/" isExternal aria-label="Instagram">
                  <Text fontSize={{ base: "md", md: "lg" }} color="black">@angelesdetalles__</Text>
                </Link>
              </Box>

              <Box>
              <Text fontSize={{ base: "md", md: "lg" }} color="black" textAlign='start'>
                <strong>Dirección</strong>
                <br />
                LA BADEA, Dosquebradas, Risaralda, Colombia. <br />
                Carrera 7 #8-24
                <br />
                <br />
                <strong>Horario de Atención</strong>
                <br />
                Lun - Sab: 8 am - 7:00 pm 
              </Text>
              </Box>
            </Box>
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
            <Box
              as="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6934220294884!2d-75.69512768958938!3d4.822607795132674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38874acee8ed2d%3A0x8f9a89343ba69151!2sCra.%207%20%238-24%2C%20Dosquebradas%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1724387905789!5m2!1ses!2sco"
              width={{ base: "400px", sm: "400px", md: "500px", lg: "600px" }} 
              height={{ base: "250px", sm: "250px", md: "350px", lg: "450px" }} 
              border="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowFullScreen
          />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};