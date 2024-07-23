import React from 'react';
import { styled, css } from 'styled-components';
import Input from '../../../../atoms/Input';
import type { InfoField } from '../../../../pages/Form/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { formState, infoErrors } from '../../../../pages/Form/state';
import Header from '../Header';

type Props = {};

const text = {
  name: { label: 'Name', placeholder: 'e.g. Stephen King' },
  email: {
    label: 'Email Address',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  phone: { label: 'Phone Number', placeholder: 'e.g. +1 234 567 890' },

  heading: 'Personal info',
  subheading: 'Please provide your name, email address, and phone number.',
};

const PersonalInfo: React.FC<Props> = ({}) => {
  const [, setState] = useRecoilState(formState);
  const errors = useRecoilValue(infoErrors);
  const infoFields = useRecoilValue(formState).info;

  const onChange =
    (field: InfoField) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(prev => ({
        ...prev,
        info: {
          ...prev.info,
          [field]: { ...prev.info[field], value: e.target.value },
        },
      }));
    };

  const handleBlur = (field: InfoField) => {
    setState(prev => ({
      ...prev,
      info: {
        ...prev.info,
        [field]: { ...prev.info[field], touched: true },
      },
    }));
  };

  return (
    <>
      <Header heading={text.heading} subHeading={text.subheading} />
      <InputContainer>
        {(Object.keys(infoFields) as Array<InfoField>).map(
          (field: InfoField) => (
            <Input
              key={field}
              label={text[field].label}
              placeholder={text[field].placeholder}
              errors={
                infoFields[field].touched
                  ? errors[field] !== null
                    ? [errors[field]]
                    : []
                  : []
              }
              value={infoFields[field].value}
              onChange={onChange(field)}
              onBlur={() => handleBlur(field)}
            />
          ),
        )}
      </InputContainer>
    </>
  );
};

const InputContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('l')};
  `,
);

export default PersonalInfo;
