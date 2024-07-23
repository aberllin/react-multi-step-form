import React from 'react';
import StepBar from '../../../../organisms/StepBar';
import FormSwitcher from '../../../../templates/FormSwitcher';
import NavigationBar from '../../../../organisms/NavigationBar';
import type { FormProps } from '../../types';

const Mobile: React.FC<FormProps> = ({
  currentStep,
  onNext,
  onGoBack,
  setCurrentPage,
}) => {
  return (
    <>
      <StepBar currentStep={currentStep} />
      <FormSwitcher currentPage={currentStep} setCurrentPage={setCurrentPage} />
      <NavigationBar
        isLastStep={currentStep === 'summary'}
        goBack={currentStep !== 'info' ? onGoBack : undefined}
        onClick={onNext}
      />
    </>
  );
};

export default Mobile;
