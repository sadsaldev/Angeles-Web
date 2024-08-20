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
            <Flex justify="space-between" align="center" paddingLeft={15} paddingRight={15}>
                {/* Logo */}
                <div onClick={handleIndex} className="cursor-pointer">
                    <img src="/assets/img/logo.png" alt="Logo" className="w-32" />
                </div>

                {/* Links */}
                <nav>
                    <ul className="flex space-x-8" style={{ color: 'var(--white)' }}>
                        <li><NavLink className="hover:underline" to="/">Inicio</NavLink></li>
                        <li><NavLink className="hover:underline" to="/about-us">Sobre Nosotros</NavLink></li>
                        <li><NavLink className="hover:underline" to="/store">Tienda</NavLink></li>
                        <li><NavLink className="hover:underline" to="/contact">Contacto</NavLink></li>
                    </ul>
                </nav>

                {/* Icons */}
                <Flex className="space-x-3" style={{ color: 'var(--white)' }}> 
                    <IconButton 
                        aria-label="WhatsApp"
                        icon={<FaWhatsapp size={24} />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="User"
                        icon={<FaUser size={20} />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="Carrito"
                        icon={<FaShoppingCart size={24} />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                </Flex>
            </Flex>
        </header>
    )
}