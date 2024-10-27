
import { Flex, Menu, MenuButton, MenuList, MenuItem, Divider, Heading, Button, Input, FormControl, FormLabel, Avatar, Stack, HStack, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Countries from "../../helpers/Countries.json";
import Flag from 'react-world-flags';

export const UserInfo = () => {
    const [isEditing, setIsEditing] = useState(false); 
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    //Cambiar estado de edición
    const toggleEdit = () => {
        setIsEditing(!isEditing);
        setProfileUpdated(false);
    }

    //Simulación de guardado de perfil
    const handleSave = () => {
        setIsEditing(false);    
        setProfileUpdated(true);
        
        setShowAlert(true); // Mostrar la alerta
        setTimeout(() => {
            setShowAlert(false); // Ocultar la alerta después de 3 segundos
        }, 3000); // 3000 ms = 3 segundos
    }

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleChange = (phoneCode) => {
        setSelectedCountry(phoneCode);
    };

    return(
        <Stack spacing={12}>
            <HStack justify='space-between' spacing={{ base: "25px", md: "25px" }} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                <HStack spacing={4}>
                    <Avatar boxSize="150px" src='/assets/img/avatar.svg'>
                        <Button
                        onClick={() => alert('Cambiar imagen')}
                        backgroundColor='black'
                        color='white'
                        size="sm"
                        borderRadius="full"
                        position='absolute'
                        _hover={{color: 'black', backgroundColor: 'white', border:'1px solid black'}}
                        >
                        Cambiar
                        </Button>
                    </Avatar>
                </HStack>

                <Stack>
                    <Heading
                        as="h1"
                        className="main-title"
                        fontSize={{ base: "2em", md: "2.5em"}}
                        transition="font-size 0.3s ease-in-out"
                        mb={4}
                        textAlign={{base: "center", md: "start"}}
                        >
                        Maria Luisa López Cepeda
                    </Heading>
                    <Divider className='line'/>
                    <Text mt={2} fontWeight='bold' textAlign={{base: "center", md: "start"}}>alguien@example.com</Text>
                    <Text fontWeight='bold' textAlign={{base: "center", md: "start"}}>+57 3101234567</Text>
                </Stack>
                <Button
                    onClick={toggleEdit}
                    variant="outline"
                    border='2px solid #5271ff'
                    color='#5271ff'
                    borderRadius='full'
                    padding='1rem' 
                    whiteSpace='normal' 
                    lineHeight={5}
                    rightIcon={<FaEdit />}
                >
                    Editar perfil
                </Button>
            </HStack>

            <Stack spacing={4}>
                <HStack spacing={4} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                    <FormControl>
                        <FormLabel>Correo</FormLabel>
                        <Input isReadOnly={!isEditing} type="email" defaultValue="alguien@example.com" focusBorderColor="#5271FF" />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="black" fontWeight="bold" fontSize='sm'>
                            Indicativo*
                        </FormLabel>
                        <HStack>
                            <Menu>
                                <MenuButton as={Button} width='70%' isDisabled={!isEditing} backgroundColor='gray.300' padding='5px' whiteSpace='normal' lineHeight={5} _hover={{backgroundColor: 'gray.300'}} fontSize={{ base: "sm", md: "md"}}>
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
                            <Input isReadOnly={!isEditing} type="tel" defaultValue="3101234567" focusBorderColor="#5271FF" />
                        </HStack>
                    </FormControl>
                </HStack>

                <HStack spacing={4} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                    <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input isReadOnly={!isEditing} type="text" defaultValue="María" focusBorderColor="#5271FF" />
                    </FormControl>

                    <FormControl>
                    <FormLabel>Apellido</FormLabel>
                    <Input isReadOnly={!isEditing} type="text" defaultValue="López" focusBorderColor="#5271FF" />
                    </FormControl>
                </HStack>

                <HStack spacing={4} display='flex' flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }}>
                    <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Input isReadOnly={!isEditing} type="password" defaultValue="********" focusBorderColor="#5271FF" />
                    </FormControl>

                    <FormControl>
                    <FormLabel>Confirmar Contraseña</FormLabel>
                    <Input isReadOnly={!isEditing} type="password" defaultValue="********" focusBorderColor="#5271FF" />
                    </FormControl>
                </HStack>
            </Stack>

            {/* Mensaje de actualización */}
            {profileUpdated && showAlert && (
            <Alert status="success">
                <AlertIcon />
                Los datos se han actualizado correctamente
            </Alert>
            )}

            {/* Botones de acción */}
            {isEditing && (
            <HStack justify={{base:'center', md:'end'}}>
                <Button className="main-b" onClick={toggleEdit}>
                Cancelar
                </Button>
                <Button className="main-b" onClick={handleSave}>
                Guardar
                </Button>
            </HStack>
            )}

        </Stack>
    )
}