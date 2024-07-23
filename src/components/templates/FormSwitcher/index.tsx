import React from 'react';
import { css, styled } from 'styled-components';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import AddsOn from './components/AddsOn';
import Summary from './components/Summary';
import { useRecoilValue } from 'recoil';
import { formState } from '../../pages/Form/state';
import ThankYou from './components/ThankYou';
import isMobileBreakpoint from '../../../utils/isMobileBreakpoint';
import type { FormProps } from '../../pages/Form/types';

type Props = {
  currentPage: FormProps['currentStep'];
  setCurrentPage: FormProps['setCurrentPage'];
};

const FormSwitcher: React.FC<Props> = props => {
  const isMobile = isMobileBreakpoint();
  if (isMobile)
    return (
      <MobileContainer>
        <Child {...props} />
      </MobileContainer>
    );

  return <Child {...props} />;
};

const Child: React.FC<Props> = ({ currentPage, setCurrentPage }) => {
  const isFormCompleted = useRecoilValue(formState).finished;

  switch (currentPage) {
    case 'info':
      return <PersonalInfo />;

    case 'plan':
      return <SelectPlan />;

    case 'adds-on':
      return <AddsOn />;

    case 'summary':
    default:
      return isFormCompleted ? (
        <ThankYou />
      ) : (
        <Summary setCurrentPage={setCurrentPage} />
      );
  }
};

const MobileContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 95px;
    left: 0;
    right: 0;
    display: flex;
    gap: ${theme.space('xxl')};
    flex-direction: column;
    background: ${theme.color('white')};
    border-radius: ${theme.space('s')};
    padding: ${theme.space('xxl')} ${theme.space('m')};
    margin: 0 ${theme.space('m')};
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  `,
);

export default FormSwitcher;
