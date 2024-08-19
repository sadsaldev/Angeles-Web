import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaWhatsapp, FaUser, FaShoppingCart } from 'react-icons/fa';

import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleIndex = () => {
        navigate('/');
    }

    return (
        <header style={{ backgroundColor: 'var(--orchid)', padding: '10px', borderBottom:'3px solid var(--medium-turquoise)'}}>
            <Flex justify="space-between" align="center">
                
                {/* Logo */}
                <div onClick={handleIndex} className="cursor-pointer">
                    <img src="/path/to/logo.png" alt="Logo" className="w-20" />
                </div>

                {/* Links */}
                <nav>
                    <ul className="flex space-x-8" style={{ color: 'var(--white)' }}> {/* Usando la variable de color */}
                        <li><NavLink className="hover:underline" to="/">Inicio</NavLink></li>
                        <li><NavLink className="hover:underline" to="/about-us">Sobre Nosotros</NavLink></li>
                        <li><NavLink className="hover:underline" to="/store">Tienda</NavLink></li>
                        <li><NavLink className="hover:underline" to="/contact">Contacto</NavLink></li>
                    </ul>
                </nav>

                {/* Icons */}
                <Flex className="space-x-4" style={{ color: 'var(--white)' }}> {/* Usando la variable de color */}
                    <IconButton 
                        aria-label="WhatsApp"
                        icon={<FaWhatsapp />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="User"
                        icon={<FaUser />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="Carrito"
                        icon={<FaShoppingCart />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                </Flex>
            </Flex>
        </header>
    )
}