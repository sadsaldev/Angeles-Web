import { useNavigate } from 'react-router-dom';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    const navigate = useNavigate();

    const handleIndex = () => {
        navigate('/');
    }

    return (
        <footer style={{ backgroundColor: 'var(--orchid)', padding: '10px', borderTop:'3px solid var(--medium-turquoise)'}}>
            <Flex justify="space-between" align="center" style={{ color: 'var(--white)', padding:'0 30px' }}>
               
                <div onClick={handleIndex} className="cursor-pointer">
                    <img src="/assets/img/logo-sticker.png" alt="Logo" className="w-40" />
                </div>

                {/* Icons */}
                <Flex className="space-x-3" style={{ color: 'var(--white)' }}> 
                    <IconButton 
                        aria-label="Mail"
                        icon={<FaEnvelope size={32} />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="WhatsApp"
                        icon={<FaWhatsapp size={32} />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                    <IconButton 
                        aria-label="Instagram"
                        icon={<FaInstagram size={32} />}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                    />
                </Flex>
                <div>
                    <h3><strong>Dirección</strong></h3>
                    <p>LA BADEA, Dosquebradas, <br /> Risaralda, Colombia.</p>
                    <p>Carrera 7 #8-24</p>
                </div>
                <div>
                    <h3><strong>Horario de Atención</strong></h3>
                    <p>Lun - Sab: 8 am - 7:00 pm</p>
                    <br />
                    <br />
                    <p>© 2024 Detalles AngeleS</p>
                </div>

            </Flex>
        </footer>
    )
}