import React from 'react';
import { css, styled } from 'styled-components';
import Icon, { type IconName } from '../../../../../../molecule/Icon';
import isMobileBreakpoint from '../../../../../../../utils/isMobileBreakpoint';

type Props = {
  price: string;
  icon: IconName;
  label: string;
  subLabel?: string;
  selected: boolean;
  onClick: () => void;
};

const PlanCard: React.FC<Props> = ({
  price,
  icon,
  label,
  selected,
  onClick,
  subLabel,
}) => {
  const isMobile = isMobileBreakpoint();
  return (
    <Container $isMobile={isMobile} $selected={selected} onClick={onClick}>
      <Icon name={icon} />

      <LabelsContainer>
        <Label>{label}</Label>
        <Price>{price}</Price>
        {subLabel && <SubLabel>{subLabel}</SubLabel>}
      </LabelsContainer>
    </Container>
  );
};

const Container = styled.div<{ $selected: boolean; $isMobile: boolean }>(
  ({ theme, $selected, $isMobile }) => css`
    cursor: pointer;
    display: flex;
    align-items: ${$isMobile ? 'center' : 'start'};
    justify-content: ${$isMobile ? 'start' : 'space-between'};
    flex-direction: ${$isMobile ? 'row' : 'column'};
    padding: ${theme.space('m')} ${theme.space('base')};
    width: ${$isMobile ? 'auto' : '100%'};
    gap: ${theme.space('l')};
    height: ${$isMobile ? '60px' : '140px'};
    border: 1px solid
      ${$selected ? theme.color('purple') : theme.color('borderColor')};
    border-radius: ${theme.space('xxs')};
    transition: all 0.3s ease;

    ${$selected &&
    css`
      background: ${theme.color('veryLightGrey')};
    `}

    &:hover {
      border-color: ${theme.color('purple')};
    }
  `,
);

const LabelsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: ${theme.space('xxxxs')};
  `,
);

const SubLabel = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('s')};
    color: ${theme.color('denim')};
  `,
);

const Price = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('grey')};
  `,
);

const Label = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('m')};
    font-weight: ${theme.fontWeight('medium')};
    color: ${theme.color('denim')};
  `,
);

export default PlanCard;
