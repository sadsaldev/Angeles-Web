import { useState } from "react";
import { Box, Button, Icon, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const TelStep3 = ({prevStep, nextStep}) => {
    const [password, setPassword] = useState('');

    //Validation rules
    const hasEightChars = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);


    return(
        <VStack spacing={8} align="stretch">
            <FormControl id="mailregister">
                <FormLabel color="black" fontWeight="bold">
                    Ahora crea tu contraseña*
                </FormLabel>
                <Input
                    type="password"
                    placeholder="********"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <VStack align='start' spacing={3}>
                <Flex align='center'>
                    <Icon as={hasEightChars ? FaCheckCircle : FaTimesCircle} color={hasEightChars ? 'green.400' : 'red.400'} />
                    <Text ml={2} fontSize='sm' color={hasEightChars ? 'green.600' : 'red.600'}>
                        Más de 8 caracteres
                    </Text>
                </Flex>
                <Flex align='center'>
                    <Icon as={hasNumber ? FaCheckCircle : FaTimesCircle} color={hasNumber ? 'green.400' : 'red.400'} />
                    <Text ml={2} fontSize='sm' color={hasNumber ? 'green.600' : 'red.600'}>
                        Contiene al menos un número
                    </Text>
                </Flex>
                <Flex align='center'>
                    <Icon as={hasSymbol ? FaCheckCircle : FaTimesCircle} color={hasSymbol ? 'green.400' : 'red.400'} />
                    <Text ml={2} fontSize='sm' color={hasSymbol ? 'green.600' : 'red.600'}>
                        Contiene al menos un Símbolo
                    </Text>
                </Flex>
                <Flex align='center'>
                    <Icon as={hasUpperCase ? FaCheckCircle : FaTimesCircle} color={hasUpperCase ? 'green.400' : 'red.400'} />
                    <Text ml={2} fontSize='sm' color={hasUpperCase ? 'green.600' : 'red.600'}>
                        Contiene al menos una mayúscula
                    </Text>
                </Flex>
            </VStack>
            <Flex align="center" justify="center" gap={4} marginTop={2}>
                <Button leftIcon={<FaArrowLeft />} className='sub-b' onClick={prevStep}>Volver</Button>
                <Button rightIcon={<FaArrowRight />}className='sub-b' onClick={nextStep}>Siguiente</Button>
            </Flex>
        </VStack>
    )
}