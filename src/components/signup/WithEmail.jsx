
import { MailStep1 } from './MailStep1';
import { MailStep2 } from './MailStep2';
import { MailStep3 } from './MailStep3';
import { MailStep4 } from './MailStep4';
import { MailStep5 } from './MailStep5';
import { MailStep6 } from './MailStep6';
import { MailStep7 } from './MailStep7';    

export const WithEmail = ({ onNextStep, onPrevStep, onCurrentStep }) => {
    console.log("Paso actual:", onCurrentStep);

    return(
        <>
        {onCurrentStep === 2 && (
            <MailStep1 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 3 && (
            <MailStep2 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 4 && (
            <MailStep3 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 5 && (
            <MailStep4 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 6 && (
            <MailStep5 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 7 && (
            <MailStep6 nextStep={onNextStep} prevStep={onPrevStep} />
        )}
        {onCurrentStep === 8 && (
            <MailStep7 />
        )}
        </>
    );
}