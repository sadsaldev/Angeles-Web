import { Box, Button, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

export const Login = ({ onNextStep, onForgotPassword }) => {
    return(
        <>
        <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
            Iniciar Sesión
        </Heading>
        <VStack spacing={4} align="stretch">
            <FormControl id="email">
                <FormLabel color="black" fontWeight="bold">
                    Correo electrónico o teléfono*
                </FormLabel>
                <Input
                    type="email"
                    placeholder="alguien@example.com"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                />
            </FormControl>

            <FormControl id="password">
                <FormLabel color="black" fontWeight="bold">
                    Contraseña*
                </FormLabel>
                <Input
                    type="password"
                    placeholder="********"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                />
                <Link color="black" fontSize="sm" mt={2} display="block" textAlign="right" onClick={onForgotPassword}>
                    ¿Olvidaste la contraseña?
                </Link>
            </FormControl>

            <Button className="main-b" size="lg" w="full">Ingresar</Button>
            <Flex align="center" marginTop={2}>
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