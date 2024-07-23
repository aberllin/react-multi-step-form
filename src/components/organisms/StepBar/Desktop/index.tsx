import React from 'react';
import styled, { css } from 'styled-components';
import Step from '../../../molecule/Step';
import type { Props } from '..';
import { steps } from '../../../pages/Form/constants';

const Desktop: React.FC<Props> = ({ currentStep }) => (
  <Container>
    <StepsContainer>
      {steps.map(step => (
        <Step
          key={step.key}
          label={step.title}
          stepNumber={step.indicator}
          active={step.key === currentStep}
        />
      ))}
    </StepsContainer>
  </Container>
);

const StepsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xxl')};
  `,
);

const Container = styled.div(
  ({ theme }) => css`
    background: url('/bg-sidebar-desktop.svg') no-repeat center center;
    background-size: cover;
    color: ${theme.color('white')};
    padding: ${theme.space('xxxl')} ${theme.space('xxl')};
    width: 274px;
    border-radius: ${theme.space('xxs')};
  `,
);

export default Desktop;
