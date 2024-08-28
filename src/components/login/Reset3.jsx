import { Box, Button, Flex, FormControl, FormLabel, Divider, Input,  Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Reset3 = ({ onNextStep, onPrevStep }) => {
    return(
        <VStack spacing={4} align="stretch">
            <FormControl id="number">
                <FormLabel color="black" fontWeight="bold">
                    Nueva contraseña*
                </FormLabel>
                <Input
                    type="number"
                    placeholder="123456"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                />
            </FormControl>
            <FormControl id="number">
                <FormLabel color="black" fontWeight="bold">
                    Confirmar contraseña*
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
                <Button leftIcon={<FaArrowLeft />} className='sub-b' onClick={onPrevStep}>Volver</Button>
                <Button rightIcon={<FaArrowRight />}className='sub-b' onClick={onNextStep}>Siguiente</Button>
            </Flex>
        </VStack>
    );
}