import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import isMobileBreakpoint from '../../../utils/isMobileBreakpoint';
import type { FormPage } from '../../pages/Form/types';

export type Props = {
  currentStep: FormPage;
};

const StepBar: React.FC<Props> = ({ currentStep }) => {
  const isMobile = isMobileBreakpoint();

  if (isMobile) return <Mobile currentStep={currentStep} />;

  return <Desktop currentStep={currentStep} />;
};

export default StepBar;
