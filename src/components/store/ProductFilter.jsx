import { useState } from 'react';
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Box, VStack, Heading, Text, Divider } from '@chakra-ui/react';

export const ProductFilter = () => {
    const [value, setValue] = useState([15000, 250000]);

    return(
        <VStack align="start" spacing={4} minWidth="250px" paddingRight={10}>
          <Heading size="md" color="black">Filtrar Por</Heading>
          <Divider className='line'/>

          {/* Categoría */}
          <Box width='100%'>
            <Heading size="sm" color="black" mb={4}>Categorías</Heading>
            <VStack align="start" spacing={1} mt={2} className='filterItems'>
              <Text>Todas</Text>
              <Text>Desayunos Sorpresa</Text>
              <Text>Cajas Sorpresa</Text>
              <Text>Detalles Estándar</Text>
              <Text>Variaciones</Text>
            </VStack>
          </Box>
          <Divider className='line'/>

          {/* Festividad */}
          <Box width='100%'>
            <Heading size="sm" color="black" mb={4}>Festividad</Heading>
            <VStack align="start" spacing={1} mt={2} className='filterItems'>
              <Text>Todas</Text>
              <Text>Día de la Madre</Text>
              <Text>Día del Padre</Text>
              <Text>Cumpleaños</Text>
              <Text>Amor</Text>
              <Text>Navidad</Text>
              <Text>Infantil</Text>
              <Text>Día de la Mujer</Text>
              <Text>Día del Hombre</Text>
              <Text>Corporativo</Text>
            </VStack>
          </Box>
          <Divider className='line'/>

          {/* Precio */}
          <Box width='100%'>
            <Heading size="sm" color="black">Precio</Heading>
             <Box style={{ padding:'0 4px', marginTop:'5px'}}>
                <RangeSlider
                    aria-label={['min', 'max']}
                    defaultValue={value}
                    min={15000}
                    max={250000}
                    onChange={(val) => setValue(val)}
                >
                    <RangeSliderTrack>
                    <RangeSliderFilledTrack backgroundColor='black'/>
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} backgroundColor='black' width='10px' height='10px'/>
                    <RangeSliderThumb boxSize={6} index={1} backgroundColor='black' width='10px' height='10px'/>
                </RangeSlider>
             </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Text>${value[0].toLocaleString('es-CO')}</Text>
                <Text>${value[1].toLocaleString('es-CO')}</Text>
            </Box>
          </Box>
        </VStack>
    );
}