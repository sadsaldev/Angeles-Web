import { Button,  Text, VStack } from "@chakra-ui/react";

export const Reset4 = ({ onGoToIndex }) => {

    return(
        <VStack spacing={4} align="stretch">
            <Text fontSize='md' color="black" textAlign='center' fontWeight='bold'>¡Listo!</Text>
            <Text fontSize='md' color="black" textAlign='center'>Tu contraseña se ha cambiado correctamente. Haz click en el botón de abajo para iniciar sesión con tu nueva contraseña.</Text>
            
            <Button className="main-b" size="lg" w="full" onClick={onGoToIndex}>Ir a Inicio de Sesión</Button>
        </VStack>
    );
}