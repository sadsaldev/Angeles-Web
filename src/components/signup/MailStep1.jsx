import { Box, Button, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const MailStep1 = ({prevStep, nextStep}) => {
    console.log(prevStep);
    console.log(nextStep);
    return(
        <VStack spacing={8} align="stretch">
            <FormControl id="mailregister">
                <FormLabel color="black" fontWeight="bold" textShadow='none'>
                    Correo electrónico*
                </FormLabel>
                <Input
                    type="email"
                    placeholder="alguien@example.com"
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