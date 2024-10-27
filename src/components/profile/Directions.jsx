
import { Flex, Menu, MenuButton, MenuList, MenuItem, Divider, Heading, Box, Button, Input, FormControl, FormLabel, Avatar, Stack, HStack, Text, Select, Alert, AlertIcon, IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Countries from "../../helpers/Countries.json";
import Flag from 'react-world-flags';

export const Directions = () => {
    const [addresses, setAddresses] = useState([
        { id: 1, text: 'Carrera 2 #01-02', city: 'Pereira, Risaralda, Colombia' },
        { id: 2, text: 'Mz 3 Casa 144 Barrio xxxxx Frente CAM', city: 'Dosquebradas, Risaralda, Colombia' },
        { id: 3, text: 'Transversal 204 Diagonal 87 Barrio xxxx', city: 'Santa Rosa de Cabal, Risaralda, Colombia' },
    ]);

    const [newAddress, setNewAddress] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const toast = useToast();

    // Agregamos los estados para almacenar los valores seleccionados
    const [selectedCountry, setSelectedCountry] = useState('Colombia'); // País predeterminado
    const [selectedDept, setSelectedDept] = useState('Risaralda');
    const [selectedCity, setSelectedCity] = useState('Pereira');

    const handleAddAddress = () => {
        if (!newAddress) return;
        
        const newAddressObj = {
            id: addresses.length + 1,
            text: newAddress,
            city: `${selectedCity}, ${selectedDept}, ${selectedCountry}`,
        };

        setAddresses([...addresses, newAddressObj]);
        setNewAddress('');
        setSelectedDept('Risaralda'); // Resetear a valor predeterminado
        setSelectedCity('Pereira');   // Resetear a valor predeterminado
        setSelectedCountry('Colombia'); // Resetear a valor predeterminado

        toast({
            title: 'La dirección se ha agregado correctamente.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleDeleteAddress = (id) => {
        setAddresses(addresses.filter((address) => address.id !== id));
    };

    const toggleAdd = () => {
        setIsAdding(!isAdding);
    };

    const handleCountryChange = (phoneCode) => {
        const selectedCountryName = Countries.find((country) => country.phoneCode === phoneCode)?.name || 'Colombia';
        setSelectedCountry(selectedCountryName);
    };

    return (
        <Stack spacing={8} mt={12}>
            <HStack justify='space-between' spacing={{ base: "25px", md: "25px" }} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                <Text fontWeight='bold' textAlign={{base: "center", md: "start"}}>Direcciones</Text>
                <Button
                    onClick={toggleAdd}
                    variant="outline"
                    border='2px solid #5271ff'
                    color='#5271ff'
                    borderRadius='full'
                    padding='1rem' 
                    whiteSpace='normal' 
                    lineHeight={5}
                >
                    Añadir +
                </Button>
            </HStack>

            <Stack spacing={4}>
                <HStack spacing={4} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                {addresses.map((address) => (
                    <Box key={address.id} p={4} bg='#e1e6ff' borderRadius='md' w='full' maxW='xs' boxShadow='md'>
                        <Text whiteSpace='pre-wrap' fontSize='sm' mb={2} fontWeight='bold'>
                            {address.text}
                        </Text>
                        <Text whiteSpace='pre-wrap' fontSize='sm' mb={2}>
                            {address.city}
                        </Text>
                        <IconButton
                            aria-label='Eliminar dirección'
                            icon={<FaTrash color='black'/> }
                            size='sm'
                            variant="ghost"
                            top={2}
                            right={2}
                            onClick={() => handleDeleteAddress(address.id)}
                        />
                    </Box>
                ))}
                </HStack>
            </Stack>

            {isAdding && (
            <Stack spacing={4}>
                <HStack spacing={4} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                    <FormControl>
                        <FormLabel>País*</FormLabel>
                        <Menu>
                            <MenuButton as={Button} width='70%' backgroundColor='gray.300' padding='5px' whiteSpace='normal' lineHeight={5} _hover={{backgroundColor: 'gray.300'}} fontSize={{ base: "sm", md: "md"}}>
                                {selectedCountry ? `Seleccionado: ${selectedCountry}` : 'Selecciona tu país'}
                            </MenuButton>
                            <MenuList height='150px' width={{ base: "250px", md:'250px', sm:'250px', lg:'350px' }} overflowY='scroll'>
                                {Countries.map((country => (
                                    <MenuItem key={country.code} onClick={() => handleCountryChange(country.phoneCode)}>
                                        <Flex align='center'>
                                            <Flag code={country.code} style={{ width: '20px', marginRight: '8px' }} />
                                            <Text>{country.name} ({country.phoneCode})</Text>
                                        </Flex>
                                    </MenuItem>
                                )))}
                            </MenuList>
                        </Menu>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Depto, Provincia*</FormLabel>
                        <Select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} focusBorderColor='#5271ff'>
                          <option value='Risaralda'>Risaralda</option>
                        </Select>
                    </FormControl>
                </HStack>

                <HStack spacing={4} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                    <FormControl>
                        <FormLabel>Ciudad*</FormLabel>
                        <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} focusBorderColor='#5271ff'>
                          <option value='Pereira'>Pereira</option>
                          <option value='Dosquebradas'>Dosquebradas</option>
                          <option value='Santa Rosa de Cabal'>Santa Rosa de Cabal</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Dirección*</FormLabel>
                        <Input type="text" placeholder="Ej: Carrera 6 #16-123 frente a floristería Las Camelias" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} focusBorderColor="#5271ff" />
                    </FormControl>
                </HStack>

                <HStack justify={{base:'center', md:'end'}}>
                    <Button className="main-b" onClick={toggleAdd}>Cancelar</Button>
                    <Button className="main-b" onClick={handleAddAddress}>Guardar</Button>
                </HStack>
            </Stack>
            )}
        </Stack>
    )
}