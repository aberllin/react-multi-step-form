import React from 'react';
import styled, { css } from 'styled-components';
import Step from '../../../molecule/Step';
import type { Props } from '..';
import { steps } from '../../../pages/Form/constants';

const Mobile: React.FC<Props> = ({ currentStep }) => (
  <Container>
    <StepsContainer>
      {steps.map(step => (
        <Step
          key={step.key}
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
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;
    gap: ${theme.space('m')};
    padding-top: ${theme.space('xxxl')};
  `,
);

const Container = styled.div(
  ({ theme }) => css`
    background: url('/bg-sidebar-mobile.svg') no-repeat center center;
    color: ${theme.color('white')};
    background-size: cover;
    height: 172px;
  `,
);

export default Mobile;
