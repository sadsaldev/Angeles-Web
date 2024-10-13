import { Box, Button, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const MailStep6 = ({prevStep, nextStep}) => {
    return(
        <VStack spacing={8} align="stretch">
            <FormControl id="mailregister">
                <FormLabel color="black" fontWeight="bold" mt={2}>
                    Ingresa el código de verificación que te hemos enviado vía WhatsApp*
                </FormLabel>
                <Input
                    type="number"
                    placeholder="123456"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                />
            </FormControl>
            <Flex align="center" justify="center" gap={4} marginTop={2}>
                <Text fontSize='md' color="black">¿No te llegó?</Text>
                <Button className="main-b" size="md">Reenviar</Button>
            </Flex>
            <Flex align="center" justify="center" gap={4} marginTop={2}>
                <Button leftIcon={<FaArrowLeft />} className='sub-b' onClick={prevStep}>Volver</Button>
                <Button rightIcon={<FaArrowRight />}className='sub-b' onClick={nextStep}>Siguiente</Button>
            </Flex>
        </VStack>
    )
}