import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  title: string;
  description: string;
  price: string;
  checked: boolean;
  onChange: () => void;
};

const AddOnCard: React.FC<Props> = ({
  title,
  description,
  price,
  checked,
  onChange,
}) => {
  return (
    <Card $checked={checked} onClick={onChange}>
      <CheckboxContainer onClick={e => e.stopPropagation()}>
        <Checkbox type="checkbox" checked={checked} onChange={onChange} />
      </CheckboxContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <Price>{price}</Price>
    </Card>
  );
};

const Card = styled.div<{ $checked: boolean }>(
  ({ theme, $checked }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space('l')};
    border: 1px solid
      ${$checked ? theme.color('purple') : theme.color('lightGrey')};
    border-radius: ${theme.space('xxs')};
    background: ${$checked ? theme.color('veryLightGrey') : 'white'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${theme.color('purple')};
    }
  `,
);

const CheckboxContainer = styled.div(
  ({ theme }) => css`
    margin-right: ${theme.space('m')};
  `,
);

const Checkbox = styled.input(
  ({ theme }) => css`
    width: 20px;
    height: 20px;
    accent-color: ${theme.color('purple')};

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
    border: 1px solid ${theme.color('lightGrey')};
    border-radius: 4px;
    display: grid;
    place-content: center;
    cursor: pointer;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: white;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 20%, 80% 0%, 43% 62%);
    }

    &:checked {
      background-color: ${theme.color('purple')};
      border-color: ${theme.color('purple')};
    }

    &:checked::before {
      transform: scale(1);
    }
  `,
);

const TextContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: ${theme.space('xxxs')};
  `,
);

const Title = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('m')};
    font-weight: ${theme.fontWeight('medium')};
    color: ${theme.color('denim')};
  `,
);

const Description = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('grey')};
  `,
);

const Price = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('purple')};
  `,
);

export default AddOnCard;
