import React from 'react';
import { css, styled } from 'styled-components';

type Props = {
  indicator: number;
  active?: boolean;
};
const StepIndicator: React.FC<Props> = ({ indicator, active = false }) => (
  <Container $active={active}>{indicator}</Container>
);

const Container = styled.div<{ $active: boolean }>(
  ({ theme, $active }) => css`
    border-radius: 50%;
    border: 1px solid ${theme.color('skyBlue')};
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${$active ? theme.color('skyBlue') : 'transparent'};
    color: ${$active ? theme.color('denim') : theme.color('white')};
    font-weight: ${theme.fontWeight('bold')};
  `,
);

export default StepIndicator;
