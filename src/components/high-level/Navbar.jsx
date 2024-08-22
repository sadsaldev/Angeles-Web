import { Box, Flex, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link, Text } from '@chakra-ui/react';
import { FaWhatsapp, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleIndex = () => {
        navigate('/');
    };

    return (
        <Box style={{backgroundColor: 'var(--orchid', borderBottom: '3px solid var(--medium-turquoise'}} p={4}>
            <Flex justify="space-between" align="center" px={15}>

                {/* Logo */}
                <Box as="div" onClick={handleIndex} cursor="pointer">
                    <img src="/assets/img/logo.svg" alt="Logo" width="128" />
                </Box>

                {/* Links - Hidden on small screens */}
                <Box display={{ base: "none", md: "flex" }}>
                    <Flex as="nav" color="white" gap={25}>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <Text _hover={{ fontWeight: '700' }}>Inicio</Text>
                        </NavLink>
                        <NavLink to="/about-us" style={{ textDecoration: 'none' }}>
                            <Text _hover={{ fontWeight: '700' }} >Sobre Nosotros</Text>
                        </NavLink>
                        <NavLink to="/store" style={{ textDecoration: 'none' }}>
                            <Text _hover={{ fontWeight: '700' }}>Tienda</Text>
                        </NavLink>
                        <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                            <Text _hover={{ fontWeight: '700' }}>Contacto</Text>
                        </NavLink>
                    </Flex>
                </Box>

                {/* Icons & Hamburger Menu */}
                <Flex align="center" color="white">
                    {/* Icons */}
                    <Link href="https://wa.link/tj5hq1" isExternal aria-label="WhatsApp">
                        <IconButton 
                            aria-label="WhatsApp"
                            icon={<FaWhatsapp size={24} color='white'/>}
                            variant="ghost"
                            _hover={{ bg: 'transparent' }}
                        />
                    </Link>
                    <IconButton 
                        aria-label="User"
                        icon={<FaUser size={20} color='white'/>}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="Carrito"
                        icon={<FaShoppingCart size={24} color='white'/>}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    {/* Hamburger Icon */}
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        justifyContent="center"
                        _hover="none"
                        _active="none"
                        icon={<FaBars color='white'/>}
                        onClick={onOpen}
                        variant="ghost"
                        aria-label="Open Menu"
                    />
                </Flex>
            </Flex>

            {/* Drawer (Hamburger Menu) */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menú</DrawerHeader>
                    <DrawerBody>
                        <VStack align="start">
                            <NavLink onClick={onClose} to="/" style={{ textDecoration: 'none' }}>
                                <Text>Inicio</Text>
                            </NavLink>
                            <NavLink onClick={onClose} to="/about-us" style={{ textDecoration: 'none' }}>
                                <Text>Sobre Nosotros</Text>
                            </NavLink>
                            <NavLink onClick={onClose} to="/store" style={{ textDecoration: 'none' }}>
                                <Text>Tienda</Text>
                            </NavLink>
                            <NavLink onClick={onClose} to="/contact" style={{ textDecoration: 'none' }}>
                                <Text>Contacto</Text>
                            </NavLink>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
