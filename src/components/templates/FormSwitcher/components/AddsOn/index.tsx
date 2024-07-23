import React from 'react';
import Header from '../Header';
import AddOnCard from './AddOnCard';
import type { AddsOn as AddsOnType } from '../../../../pages/Form/types';
import { useRecoilState } from 'recoil';
import { formState } from '../../../../pages/Form/state';
import styled, { css } from 'styled-components';
import { addsOnMap } from '../../../../pages/Form/constants';

const text = {
  heading: 'Pick add-ons',
  subheading: 'Add-ons help enhance your gaming experience.',
};

type Props = {};

const AddsOn: React.FC<Props> = () => {
  const [state, setState] = useRecoilState(formState);
  const { billingCycle } = state.plan;

  const handleToggle = (addOn: AddsOnType) => {
    setState(prev => ({
      ...prev,
      'adds-on': prev['adds-on'].includes(addOn)
        ? prev['adds-on'].filter(item => item !== addOn)
        : [...prev['adds-on'], addOn],
    }));
  };

  return (
    <>
      <Header heading={text.heading} subHeading={text.subheading} />
      <Content>
        {(Object.keys(addsOnMap) as Array<AddsOnType>).map(
          (field: AddsOnType) => {
            const amount = addsOnMap[field][billingCycle];
            const cycleLabel = billingCycle === 'monthly' ? 'mo' : 'yo';
            const price = `$${amount}/${cycleLabel}`;

            return (
              <AddOnCard
                key={field}
                checked={state['adds-on'].includes(field)}
                title={field}
                description={addsOnMap[field].description}
                price={price}
                onChange={() => handleToggle(field)}
              />
            );
          },
        )}
      </Content>
    </>
  );
};

const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('m')};
  `,
);

export default AddsOn;
