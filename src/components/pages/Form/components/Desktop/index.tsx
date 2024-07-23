import React from 'react';
import StepBar from '../../../../organisms/StepBar';
import FormSwitcher from '../../../../templates/FormSwitcher';
import type { FormProps } from '../../types';
import NavigationBar from '../../../../organisms/NavigationBar';
import styled, { css } from 'styled-components';

const Desktop: React.FC<FormProps> = ({
  currentStep,
  setCurrentPage,
  onGoBack,
  onNext,
}) => {
  return (
    <Container>
      <Inner>
        <StepBar currentStep={currentStep} />
        <Content>
          <FormSwitcher
            currentPage={currentStep}
            setCurrentPage={setCurrentPage}
          />
          <NavigationBar
            isLastStep={currentStep === 'summary'}
            goBack={currentStep !== 'info' ? onGoBack : undefined}
            onClick={onNext}
          />
        </Content>
      </Inner>
    </Container>
  );
};

const Content = styled.div(
  ({}) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 32px 32px 32px 80px;
    width: 450px;
  `,
);

const Container = styled.div(
  ({}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
);

const Inner = styled.div(
  ({ theme }) => css`
    max-width: 940px;
    height: 600px;
    width: 100%;
    background: ${theme.color('white')};
    padding: ${theme.space('m')};
    display: flex;
    border-radius: 15px;
    margin: ${theme.space('l')};
  `,
);

export default Desktop;
