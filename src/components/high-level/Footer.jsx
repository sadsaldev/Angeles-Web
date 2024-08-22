import { useNavigate } from 'react-router-dom';
import { Box, Flex, IconButton, Text, Stack, Link } from '@chakra-ui/react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    const navigate = useNavigate();

    const handleIndex = () => {
        navigate('/');
    }

    return (
        <Box style={{backgroundColor: 'var(--orchid', borderTop: '3px solid var(--medium-turquoise'}} p={6} color="white">
            <Flex 
                direction={{ base: "column", md: "row" }} 
                justify="space-between" 
                align="center" 
                wrap="wrap"
                spacing={6}
            >
                {/* Contenedor 1: Logo */}
                <Box 
                    onClick={handleIndex} 
                    display="flex"
                    justifyContent={{ base: "center", md: "center", sm:"center", lg: "end" }} 
                    cursor="pointer" 
                    flex="1" 
                    mb={{ base: 4, md: 0 }}
                >
                    <img 
                        src="/assets/img/logo-sticker.svg" 
                        alt="Logo" 
                        width="200"
                    />
                </Box>

                {/* Contenedor 2: Íconos de redes sociales */}
                <Flex 
                    flex="1" 
                    align="center" 
                    justify="center" 
                    mb={{ base: 4, md: 0 }}
                >
                    <Link href="mailto:detallesyregalosangeles@gmail.com" isExternal aria-label="Mail" mr={4}>
                        <IconButton 
                            aria-label="Mail"
                            icon={<FaEnvelope size={32} color='white'/>}
                            variant="ghost"
                            _hover={{ bg: 'transparent' }}
                        />
                    </Link>
                    <Link href="https://wa.link/tj5hq1" isExternal aria-label="WhatsApp" mr={4}>
                        <IconButton 
                            aria-label="WhatsApp"
                            icon={<FaWhatsapp size={32} color='white'/>}
                            variant="ghost"
                            _hover={{ bg: 'transparent' }}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/angelesdetalles__/" isExternal aria-label="Instagram">
                        <IconButton 
                            aria-label="Instagram"
                            icon={<FaInstagram size={32} color='white'/>}
                            variant="ghost"
                            _hover={{ bg: 'transparent' }}
                        />
                    </Link>
                </Flex>

                {/* Contenedor 3: Dirección */}
                <Box 
                    flex="1" 
                    textAlign={{ base: "center", md: "left" }} 
                    mb={{ base: 4, md: 0 }}
                    p={{ base: 0, md: 5}}
                >
                    <Text fontWeight="bold">Dirección</Text>
                    <Text>LA BADEA, Dosquebradas, <br /> Risaralda, Colombia.</Text>
                    <Text>Carrera 7 #8-24</Text>
                </Box>

                {/* Contenedor 4: Horario de Atención y Copyright */}
                <Box 
                    flex="1" 
                    textAlign={{ base: "center", md: "left" }} 
                    mb={{ base: 4, md: 0 }}
                >
                    <Text fontWeight="bold">Horario de Atención</Text>
                    <Text>Lun - Sab: 8 am - 7:00 pm</Text>
                    <Text mt={6}>© 2024 Detalles AngeleS</Text>
                </Box>
            </Flex>
        </Box>
    );
};
