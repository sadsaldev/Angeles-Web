import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Text, Heading, Image, Button, Select, Divider, Textarea, Input, IconButton, VStack, HStack} from '@chakra-ui/react';
  import { FaArrowLeft, FaUpload } from 'react-icons/fa';
  import data from '../../products/Products.json';
  
  export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/store');
    }

    const handleChange = (e) => {
      const inputValue = e.target.value;

      if (inputValue === '' || (Number(inputValue) > 0)){
        setValue(inputValue);
      }
    };

    useEffect(() => {
        const productData = data.find((item) => item.id === parseInt(id, 10));
        setProduct(productData);
    }, [id]);

    if (!product){
        return <Text>Producto no encontrado.</Text>
    }

    return (
      <Box p={{ base: 4, md: 8 }} maxW="70%" mx="auto">
        <HStack mb={4}>
          <IconButton
            icon={<FaArrowLeft />}
            variant="link"
            colorScheme="blue"
            aria-label="Volver"
            onClick={goBack}
          />
          <Text as="a" href="#" color="blue.500" onClick={goBack}>
            Volver
          </Text>
        </HStack>
        <HStack alignItems="start" justifyContent='end' spacing={10} flexDirection={{ base: "column", md: "column", lg: "row", sm:'column' }} mb={10}>
         <VStack align="start"  width='auto'>

           {/* Imagen del Producto */}
           <Image
            src={product.image}
            alt={product.title}
            boxSize={300}
            objectFit="cover"
            borderRadius="md"
           />

            {/* Cantidad y Botón */}
            <Box mt={6} width="100%" display='flex' flexDirection='column' gap={4} alignItems='center' justifyContent='center'>
              <HStack flexDirection='row'>
                <Text fontWeight="bold">Cantidad:</Text>
                <Input width="80px" type='number' focusBorderColor='#5271ff' value={value} onChange={handleChange} min={1}>
                </Input>
              </HStack>
                <Button className="main-b" size="md">Agregar al Carrito</Button>
            </Box>
         </VStack>
  
          {/* Información del Producto */}
          <VStack align="start" spacing={4} flex="1">
            <Heading size="lg" color="var(--royal-blue)">{product.title}</Heading>
            <Text fontSize="xl" fontWeight="bold">COP ${product.price}</Text>
            <Text>{product.description}</Text>
  
            {/* Personalización */}
            <Heading size="md" color="black" mt={6}>
              Personalización
              <Divider className='line' mt={2} mb={2}/>
            </Heading>
            <VStack align="start" spacing={3} width="100%">
              <Box>
                <Text fontWeight="bold">Tipo de flores:</Text>
                 <HStack flexDirection={{base: "column", md: "column", lg: "row", sm:'column'}} width='100%' gap={3} alignItems='start'>
                    <Select width='250px' focusBorderColor='#5271ff' placeholder="Selecciona un tipo de flor">
                    <option value="rosas">Rosas</option>
                    <option value="girasoles">Girasoles</option>
                    <option value="lilas">Lilas</option>
                    </Select>
                    <HStack width={{base: "100%", md: "100%", lg: "50%", sm:'100%'}}>
                     <Text fontSize='sm' textAlign={{base: "start", md: "start", lg: "end", sm:'start'}}>*Selecciona de la lista el tipo de flores que quieres para el detalle</Text>
                    </HStack>
                 </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold">Colores:</Text>
                <HStack flexDirection={{base: "column", md: "column", lg: "row", sm:'column'}} width='100%' gap={3} alignItems='start'>
                 <Input width='250px' focusBorderColor='#5271ff' placeholder="Especifica los colores..." />
                 <HStack width={{base: "100%", md: "100%", lg: "50%", sm:'100%'}}>
                  <Text fontSize='sm' textAlign={{base: "start", md: "start", lg: "end", sm:'start'}}>*Selecciona de la lista el tipo de flores que quieres para el detalle</Text>
                 </HStack>
                </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold">Motivo del Peluche:</Text>
                <HStack flexDirection={{base: "column", md: "column", lg: "row", sm:'column'}} width='100%' gap={3} alignItems='start'>
                 <Input width='250px' focusBorderColor='#5271ff' placeholder="Especifica el motivo..." />
                 <HStack width={{base: "100%", md: "100%", lg: "50%", sm:'100%'}}>
                  <Text fontSize='sm' textAlign={{base: "start", md: "start", lg: "end", sm:'start'}}>*Selecciona de la lista el tipo de flores que quieres para el detalle</Text>
                 </HStack>
                </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold">Mensaje Tarjeta:</Text>
                <HStack flexDirection={{base: "column", md: "column", lg: "row", sm:'column'}} width='100%' gap={3} alignItems='start'>
                 <Textarea width='250px' focusBorderColor='#5271ff' placeholder="Escribe el mensaje para la tarjeta..." />
                 <HStack width={{base: "100%", md: "100%", lg: "50%", sm:'100%'}}>
                  <Text fontSize='sm' textAlign={{base: "start", md: "start", lg: "end", sm:'start'}}>*Selecciona de la lista el tipo de flores que quieres para el detalle</Text>
                 </HStack>
                </HStack>
              </Box>
              {/* <Box>
                <Text fontWeight="bold">Fotos Tarjeta (Opcional):</Text>
                <HStack flexDirection={{base: "column", md: "column", lg: "row", sm:'column'}} width='100%' gap={3} alignItems='start'>
                 <HStack  width='250px'>
                   <IconButton icon={<FaUpload />} />
                   <Button>Subir</Button>
                 </HStack>
                 <HStack width={{base: "100%", md: "100%", lg: "50%", sm:'100%'}}>
                  <Text fontSize='sm' textAlign={{base: "start", md: "start", lg: "end", sm:'start'}}>*Adjunta aquí las fotos que quieres incluir en la tarjeta (máximo 4 fotos)</Text>
                 </HStack>
                </HStack>
              </Box> */}
            </VStack>
          </VStack>
        </HStack>
      </Box>
    );
  };
  