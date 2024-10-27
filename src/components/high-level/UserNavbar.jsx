import { useState, useEffect, useRef } from "react";
import { IconButton, Box, Button, VStack, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const UserNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const overlayRef = useRef(); // Referencia al contenedor del pop-up

    //Overlay toggle
    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    //Cerrar el pop-up cuando se clickea afuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            //Verificar si el click fue fuera del pop-up y si está abierto
            if (isOpen && overlayRef.current && !overlayRef.current.contains(event.target)){
                setIsOpen(false); //Cerrar el pop-up
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

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
                    ref={overlayRef} //Referencia del contenedor del pop-up
                    position="absolute"
                    top="40px" 
                    right="0"
                    style={{backgroundColor:'var(--magnolia)'}}
                    p={4}
                    borderRadius="md"
                    boxShadow="lg"
                    zIndex="1000"
                    width="200px"
              >
                <VStack alignItems='flex-start'>
                    <NavLink to="/login" style={({ isActive }) => ({textDecoration: 'none', fontWeight: isActive ? '700' : '400'})}>
                        <Text _hover={{ fontWeight: '700' }} fontSize='md' style={{color:'var(--orchid)'}}>
                            Iniciar Sesión
                        </Text>
                    </NavLink>
                    <NavLink to="/signup" style={({ isActive }) => ({textDecoration: 'none', fontWeight: isActive ? '700' : '400'})}>
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