import {useState} from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, FormControl, Select, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Countries from "../../helpers/Countries.json";
import Flag from 'react-world-flags';

export const TelStep1 = ({prevStep, nextStep}) => {

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleChange = (phoneCode) => {
        setSelectedCountry(phoneCode);
    };

    return(
        <VStack spacing={8} align="stretch">
            <Text color="black" fontSize="md" textAlign="center" mt={2}>Añade un número de teléfono</Text>
            <FormControl id="mailregister" mt={-2}>
                <FormLabel color="black" fontWeight="bold" fontSize='sm'>
                    Indicativo*
                </FormLabel>
                <Menu>
                    <MenuButton as={Button} mb={2} backgroundColor='gray.300' _hover={{backgroundColor: 'gray.300'}}>
                        {selectedCountry ? `Seleccionado: ${selectedCountry}` : 'Selecciona tu país'}
                    </MenuButton>
                    <MenuList  height='150px' width={{ base: "250px", md:'250px', sm:'250px', lg:'350px' }} overflowY='scroll'>
                        {Countries.map((country => (
                            <MenuItem key={country.code} onClick={() => handleChange(country.phoneCode)}>
                                <Flex align='center'>
                                    <Flag code={country.code} style={{ width: '20px', marginRight: '8px' }} />
                                    <Text>{country.name} ({country.phoneCode})</Text>
                                </Flex>
                            </MenuItem>
                        )))}
                    </MenuList>
                </Menu>
                <FormLabel color="black" fontWeight="bold" fontSize='sm'>
                    Número*
                </FormLabel>
                <Input
                    type="number"
                    placeholder="3101234567"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor="#5271FF"
                    borderColor="#5271FF"
                />
            </FormControl>
            <Text color="black" fontSize="md" textAlign="center" px={4}>Asegurate de que el número cuente con WhatsApp</Text>
            <Flex align="center" justify="center" gap={4} marginTop={2}>
                <Button leftIcon={<FaArrowLeft />} className='sub-b' onClick={prevStep}>Volver</Button>
                <Button rightIcon={<FaArrowRight />}className='sub-b' onClick={nextStep}>Siguiente</Button>
            </Flex>
        </VStack>
    )
}