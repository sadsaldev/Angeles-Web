import { Box, Button, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const MailStep4 = ({prevStep, nextStep}) => {
    return(
        <VStack spacing={8} align="stretch">
            <Text color="black" fontSize="md" textAlign="center" mt={2}>Ingresa tu nombre completo</Text>
            <FormControl id="mailregister" mt={-2}>
                <FormLabel color="black" fontWeight="bold" fontSize='sm'>
                    Nombre(s)*
                </FormLabel>
                <Input
                    type="text"
                    placeholder="Juanito"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                    mb={4}
                />
                <FormLabel color="black" fontWeight="bold" fontSize='sm'>
                    Apellido(s)*
                </FormLabel>
                <Input
                    type="text"
                    placeholder="Alimaña"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                />
            </FormControl>
            <Flex align="center" justify="center" gap={4} marginTop={2}>
                <Button leftIcon={<FaArrowLeft />} className='sub-b' onClick={prevStep}>Volver</Button>
                <Button rightIcon={<FaArrowRight />}className='sub-b' onClick={nextStep}>Siguiente</Button>
            </Flex>
        </VStack>
    )
}