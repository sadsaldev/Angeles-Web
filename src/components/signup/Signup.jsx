import { Box, Button, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

export const Signup = ({ chosenOpc }) => {
    return(
        <>
        <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
            Registrarse
        </Heading>
        <VStack spacing={4} align="stretch">
            <Text px={2} color="black" fontSize="md" textAlign="center">Elige con cual de las dos opciones quieres registrarte</Text>
            <Flex align="center" margin={2} gap={4}>
                <Button className="main-b" size="lg" fontSize={{ base: "sm", md:'md', sm:'sm' }} height={16} padding='1rem' whiteSpace='normal' lineHeight={5} textAlign='center' onClick={() => chosenOpc('Email')}>Correo Electrónico</Button>
                <Button className="main-b" size="lg" fontSize={{ base: "sm", md:'md', sm:'sm' }} height={16} padding='1rem' whiteSpace='normal' lineHeight={5} textAlign='center'  onClick={() => chosenOpc('Telephone')}>Número de Teléfono</Button>
            </Flex>
            <Text px={2} color="black" fontSize="md" textAlign="center">Nota: Si eliges el correo para registrarte, tendrás que añadir un número de teléfono más adelante.</Text>
            <Flex align="center">
                <Divider borderColor="gray.300" />
                    <Text px={2} color="gray.500" fontSize="sm">
                        O
                    </Text>
                <Divider borderColor="gray.300" />
            </Flex>
            <Button leftIcon={<FaGoogle />} size="lg" w="full" className='sub-b'>Continua con Google</Button>
        </VStack>
        </>
    );
}