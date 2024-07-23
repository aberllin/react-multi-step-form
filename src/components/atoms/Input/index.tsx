import React, { type InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  errors?: Array<string | null>;
};

const Input: React.FC<Props> = ({ label, errors, ...rest }) => {
  const hasErrors = errors && errors.length > 0;
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>{' '}
        {hasErrors && errors[0] && <Label error>{errors[0]}</Label>}
      </LabelContainer>
      <InputElement $hasErrors={hasErrors} {...rest} />
    </Container>
  );
};

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xxs')};
  `,
);

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span<{ error?: boolean }>(
  ({ theme, error = false }) => css`
    font-size: ${theme.space('base')};
    color: ${error ? theme.color('error') : theme.color('denim')};
    font-weight: ${error
      ? theme.fontWeight('bold')
      : theme.fontWeight('regular')};
  `,
);

const InputElement = styled.input<{ $hasErrors?: boolean }>(
  ({ theme, $hasErrors }) => css`
    border: 1px solid
      ${$hasErrors ? theme.color('error') : theme.color('borderColor')};
    color: ${theme.color('denim')};
    border-radius: ${theme.space('xxs')};
    font-weight: ${theme.fontWeight('medium')};
    padding: ${theme.space('base')};
    font-size: ${theme.space('m')};
    height: ${theme.space('l')};
    outline: none;

    &::placeholder {
      color: ${theme.color('grey')};
    }

    &:focus {
      border-color: ${theme.color('purple')};
    }

    &:focus::placeholder {
      color: transparent;
    }
  `,
);

export default Input;
