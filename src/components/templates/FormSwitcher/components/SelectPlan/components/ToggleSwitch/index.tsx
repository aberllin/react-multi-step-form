import React from 'react';
import styled, { css } from 'styled-components';
import type { BillingCycle } from '../../../../../../pages/Form/types';

type Props = {
  billingCycle: BillingCycle;
  onChange: () => void;
};

const ToggleSwitch: React.FC<Props> = ({ billingCycle, onChange }) => {
  const isYearly = billingCycle === 'yearly';

  return (
    <ToggleContainer>
      <Label $isActive={!isYearly}>Monthly</Label>
      <Switch $isActive={isYearly} onClick={onChange}>
        <SwitchCircle isActive={isYearly} />
      </Switch>
      <Label $isActive={isYearly}>Yearly</Label>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6;
    padding: ${theme.space('base')};
    border-radius: 8px;
  `,
);

const Label = styled.span<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    font-size: ${theme.fontSize('base')};
    font-weight: ${theme.fontWeight('medium')};
    color: ${theme.color('denim')};
    opacity: ${$isActive ? '1' : '0.5'};
    margin: 0 ${theme.space('xs')};
  `,
);

const Switch = styled.div<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    width: 38px;
    height: 20px;
    background-color: ${theme.color('denim')};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: ${$isActive ? 'flex-end' : 'flex-start'};
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      justify-content 0.3s ease;
  `,
);

const SwitchCircle = styled.div<{ isActive: boolean }>(
  ({ theme }) => css`
    width: ${theme.space('s')};
    height: ${theme.space('s')};
    background-color: #ffffff;
    border-radius: 50%;
    margin: 3px;
    transition: transform 0.3s ease;
  `,
);

export default ToggleSwitch;
