
import { TelStep1 } from './TelStep1';
import { TelStep2 } from './TelStep2';
import { TelStep3 } from './TelStep3';
import { TelStep4 } from './TelStep4';
import { TelStep5 } from './TelStep5';    

export const WithTelephone = ({ onNextStep, onPrevStep, onCurrentStep }) => {

    return(
        <>
        {onCurrentStep === 2 && (
            <TelStep1 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 3 && (
            <TelStep2 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 4 && (
            <TelStep3 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 5 && (
            <TelStep4 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 6 && (
            <TelStep5 />
        )}
        </>
    );
}