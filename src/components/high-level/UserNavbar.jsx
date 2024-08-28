import { useState } from "react";
import { IconButton, Box, Button, VStack, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const UserNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    //Overlay toggle
    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box position="relative" display="inline-block">
            <IconButton
                aria-label="User"
                icon={<FaUser size={20} color="white" />}
                variant="ghost"
                _hover={{ bg: "transparent" }}
                onClick={toggleOverlay} // Asociar el evento click
            />

            {/*Overlay que se muestra u oculta dependiendo del estado*/}
            {isOpen && (
                <Box
                    position="absolute"
                    top="40px" // Ajusta la posición vertical según tu diseño
                    right="0"
                    style={{backgroundColor:'var(--magnolia)'}}
                    p={4}
                    borderRadius="md"
                    boxShadow="lg"
                    zIndex="1000"
                    width="200px" // Ajusta el ancho según tu necesidad
              >
                <VStack alignItems='flex-start'>
                    <NavLink to="/login" style={{ textDecoration: 'none' }}>
                        <Text _hover={{ fontWeight: '700' }} fontSize='md' style={{color:'var(--orchid)'}}>
                            Iniciar Sesión
                        </Text>
                    </NavLink>
                    <NavLink to="/signup" style={{ textDecoration: 'none' }}>
                        <Text _hover={{ fontWeight: '700' }} fontSize='md' style={{color:'var(--orchid)'}}>
                            Registrarse
                        </Text>
                    </NavLink>
                </VStack>
              </Box>
            )}
        </Box>
    );
}