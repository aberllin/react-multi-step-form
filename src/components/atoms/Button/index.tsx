import React, { type ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: 'primary' | 'secondary' | 'tertiary';
  label: string;
};

const Button: React.FC<Props> = ({
  appearance = 'primary',
  label,
  ...rest
}) => {
  return (
    <ButtonElement $appearance={appearance} {...rest}>
      {label}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<{ $appearance: Props['appearance'] }>(
  ({ theme, $appearance = 'primary' }) => css`
    cursor: pointer;
    background: ${$appearance === 'secondary'
      ? theme.color('purple')
      : $appearance === 'tertiary'
        ? 'transparent'
        : theme.color('denim')};

    color: ${$appearance === 'tertiary'
      ? theme.color('grey')
      : theme.color('white')};

    padding: ${theme.space('xl')};
    padding-left: ${$appearance === 'tertiary' ? 0 : theme.space('xl')};

    font-size: ${theme.space('m')};
    font-weight: ${theme.fontWeight('medium')};

    height: ${theme.space('l')};
    width: max-content;

    border-radius: ${theme.space('xxs')};
    border: none;
    outline: none;

    display: flex;
    align-items: center;

    transition: all 0.3s ease;

    &:disabled {
      background: ${theme.color('lightGrey')};
      pointer-events: none;
      cursor: not-allowed;
    }

    &:disabled:hover {
      background: ${theme.color('lightGrey')};
    }

    &:hover {
      color: ${$appearance === 'tertiary'
        ? theme.color('denim')
        : theme.color('white')};
      background: ${$appearance === 'primary'
        ? theme.color('lightDenim')
        : $appearance === 'secondary'
          ? theme.color('lightBlue')
          : 'transparent'};
    }
  `,
);

export default Button;
