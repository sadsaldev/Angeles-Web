import { useState } from 'react';
import { Box, Heading } from "@chakra-ui/react";
import { Login } from './Login';
import { Reset1 } from './Reset1';
import { Reset2 } from './Reset2';
import { Reset3 } from './Reset3';
import { Reset4 } from './Reset4';

export const LoginForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);
    const forgotPassword = () => setCurrentStep(2);
    const goToIndex = () => setCurrentStep(1);

    return (
        <Box w="100%" maxW="md" px={14} py={10} borderRadius="lg" boxShadow="lg" style={{backgroundColor: 'var(--lavender)'}} >
            {currentStep === 1 && (
                <Login onNextStep={nextStep} onForgotPassword={forgotPassword} />
            )}
            {currentStep === 2 && (
                <>
                <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
                    Recuperar Cuenta
                </Heading>
                <Reset1 onNextStep={nextStep} onPrevStep={prevStep} />
                </>
            )}
            {currentStep === 3 && (
                <>
                <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
                    Recuperar Cuenta
                </Heading>
                <Reset2 onNextStep={nextStep} onPrevStep={prevStep} />
                </>
            )}
            {currentStep === 4 && (
                <>
                <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
                    Recuperar Cuenta
                </Heading>
                <Reset3 onNextStep={nextStep} onPrevStep={prevStep} />
                </>
            )}
            {currentStep === 5 && (
                <>
                <Heading as="h2" fontSize="2.2em" textAlign="center" mb={6} className="main-title">
                    Recuperar Cuenta
                </Heading>
                <Reset4 onGoToIndex={goToIndex}/>
                </>
            )}
            
        </Box>
    )
}