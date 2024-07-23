import React from 'react';
import { css, styled } from 'styled-components';
import StepIndicator from '../../atoms/StepIndicator';

type Props = {
  stepNumber: number;
  label?: string;
  active?: boolean;
};

const Step: React.FC<Props> = ({ stepNumber, label, active = false }) => {
  return (
    <Container>
      <StepIndicator indicator={stepNumber} active={active} />
      {label && (
        <Labels>
          <StepNumber>STEP {stepNumber}</StepNumber>
          <Label>{label}</Label>
        </Labels>
      )}
    </Container>
  );
};

const StepNumber = styled.span(
  ({ theme }) => css`
    color: ${theme.color('lightBlue')};
    font-size: ${theme.fontSize('s')};
  `,
);

const Label = styled.span(
  ({ theme }) => css`
    color: ${theme.color('white')};
    font-weight: ${theme.fontWeight('bold')};
    font-size: ${theme.fontSize('base')};
  `,
);
const Labels = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xxxs')};
    margin-left: ${theme.space('m')};
  `,
);

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
  `,
);

export default Step;
