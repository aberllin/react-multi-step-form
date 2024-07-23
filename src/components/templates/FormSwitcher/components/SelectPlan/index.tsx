import React from 'react';
import { styled, css } from 'styled-components';
import type { BillingPlan } from '../../../../pages/Form/types';
import PlanCard from './components/PlanCard';
import ToggleSwitch from './components/ToggleSwitch';
import { useRecoilState } from 'recoil';
import { formState } from '../../../../pages/Form/state';
import isMobileBreakpoint from '../../../../../utils/isMobileBreakpoint';
import Header from '../Header';
import { plansMap } from '../../../../pages/Form/constants';

type Props = {};

const text = {
  heading: 'Select your plan',
  subheading: 'You have the option of monthly or yearly billing.',
  freeMonths: '2 months free',
};

const SelectPlan: React.FC<Props> = ({}) => {
  const [state, setState] = useRecoilState(formState);
  const { plan: selectedPlan, billingCycle } = state.plan;

  const onChangeBillingCycle = () => {
    setState(prevState => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        billingCycle: billingCycle === 'monthly' ? 'yearly' : 'monthly',
      },
    }));
  };

  const onChangePlan = (plan: BillingPlan) => {
    setState(prevState => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        plan,
      },
    }));
  };

  const isMobile = isMobileBreakpoint();

  return (
    <>
      <Header heading={text.heading} subHeading={text.subheading} />
      <Content>
        <PlansContainer $isMobile={isMobile}>
          {(Object.keys(plansMap) as Array<BillingPlan>).map(
            (plan: BillingPlan) => {
              const amount = plansMap[plan][billingCycle];
              const cycleLabel = billingCycle === 'monthly' ? 'mo' : 'yo';
              const price = `$${amount}/${cycleLabel}`;

              return (
                <PlanCard
                  key={plan}
                  label={plan}
                  price={price}
                  icon={plansMap[plan].icon}
                  subLabel={
                    billingCycle === 'yearly' ? text.freeMonths : undefined
                  }
                  selected={plan === selectedPlan}
                  onClick={() => onChangePlan(plan)}
                />
              );
            },
          )}
        </PlansContainer>
        <ToggleSwitch
          billingCycle={state.plan.billingCycle}
          onChange={onChangeBillingCycle}
        />
      </Content>
    </>
  );
};

const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xxl')};
  `,
);

const PlansContainer = styled.div<{ $isMobile: boolean }>(
  ({ theme, $isMobile }) => css`
    display: flex;
    flex-direction: ${$isMobile ? 'column' : 'row'};
    gap: ${theme.space('l')};
  `,
);

export default SelectPlan;
