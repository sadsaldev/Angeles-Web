import { useNavigate } from "react-router-dom";
import { Icon, IconButton, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const MailStep7 = () => {
    const navigate = useNavigate();
    const handleProfile = () => {
        navigate('/profile');
    }
    return(
        <VStack spacing={4} align="stretch">
            
            <Text color="black" fontSize="md" textAlign="center" mt={2} fontWeight='bold'>¡Listo! Has completado correctamente la creación de tu cuenta.</Text>
             <Flex align="center" justify="center">
                <IconButton 
                    aria-label="CheckCircle"
                    icon={<FaCheckCircle size={40} color='green' />}
                    variant="ghost"
                    _hover={{ bg: 'transparent' }}
                    cursor='default'
                />
             </Flex>
            <Text color="black" fontSize="md" textAlign="center" mt={2}>Ahora ve a Perfil para añadir direcciones, cambiar tu foto o modificar tus datos.</Text>
            <Flex align="center" justify="center" gap={4} marginTop={2}>
                <Button rightIcon={<FaArrowRight />}className='sub-b' onClick={handleProfile}>Ir a Perfil</Button>
            </Flex>
        </VStack>
    )
}