import { useState } from 'react';
import { Box, Heading } from "@chakra-ui/react";
import { Signup } from './Signup';
import { WithEmail } from './WithEmail';

export const SignupForm = () => {
    const [option, setOption] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const handleOption = (selectedOption) => {
        setOption(selectedOption); //Guardar opción
        console.log("Opción seleccionada:", selectedOption);
        nextStep(); //Avanzar al siguiente paso
    };

    //Funcion para avanzar al siguiente paso
    const nextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
        console.log("Avanzando al paso:", currentStep + 1);
    };

    //Funcion para retrodecer de paso
    const prevStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    return (
        <Box w="100%" maxW="md" px={14} py={10} borderRadius="lg" boxShadow="lg" style={{backgroundColor: 'var(--lavender)'}} >
            {currentStep === 1 && (
                <Signup onNextStep={nextStep} chosenOpc={handleOption} />
            )}
            {currentStep >= 2 && option === 'Email' && (
                <>
                <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">Registrarse</Heading>
                <WithEmail onNextStep={nextStep} onPrevStep={prevStep} onCurrentStep={currentStep} />
                {/* <Reset1 onNextStep={nextStep} onPrevStep={prevStep} /> */}
                </>
            )}
            {currentStep >= 2 && option === 'Telephone' && (
                <>
                <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
                    Telephone chosen
                </Heading>
                {/* <Reset1 onNextStep={nextStep} onPrevStep={prevStep} /> */}
                </>
            )}
        </Box>
    )
}