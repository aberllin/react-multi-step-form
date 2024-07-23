import React from 'react';
import Header from '../Header';
import type { FormProps } from '../../../../pages/Form/types';
import { css, styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { formState } from '../../../../pages/Form/state';
import { addsOnMap, plansMap } from '../../../../pages/Form/constants';

const text = {
  heading: 'Finishing up',
  subheading: 'Double-check everything looks OK before confirming.',
};
type Props = { setCurrentPage: FormProps['setCurrentPage'] };

const Summary: React.FC<Props> = ({ setCurrentPage }) => {
  const state = useRecoilValue(formState);
  const currentPlan = state.plan.plan;
  const billingCycle = state.plan.billingCycle;
  const selectedAddsOn = state['adds-on'];

  const planPrice = plansMap[currentPlan][billingCycle];
  const cycleLabel = billingCycle === 'monthly' ? 'mo' : 'yo';
  const planAmount = billingCycle === 'monthly' ? planPrice : planPrice * 10;
  const totalAddOns = selectedAddsOn.reduce(
    (total, addOn) => total + addsOnMap[addOn][billingCycle],
    0,
  );
  const totalPrice = planAmount + totalAddOns;

  return (
    <>
      <Header heading={text.heading} subHeading={text.subheading} />
      <SummaryContainer>
        <PlanContainer>
          <PlanInfo>
            <PlanName>
              {state.plan.plan.charAt(0).toUpperCase() +
                state.plan.plan.slice(1)}{' '}
              ({billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)})
            </PlanName>
            <ChangeLink onClick={() => setCurrentPage('plan')}>
              Change
            </ChangeLink>
          </PlanInfo>
          <PlanPrice>
            ${planAmount}/{cycleLabel}
          </PlanPrice>
        </PlanContainer>
        <Divider />
        <AddOnsContainer>
          {selectedAddsOn.map(addOn => (
            <AddOnItem key={addOn}>
              <AddOnName>{addOn}</AddOnName>
              <AddOnPrice>
                +${addsOnMap[addOn][billingCycle]}/{cycleLabel}
              </AddOnPrice>
            </AddOnItem>
          ))}
        </AddOnsContainer>
        <TotalContainer>
          <TotalLabel>
            Total (per {billingCycle === 'monthly' ? 'month' : 'year'})
          </TotalLabel>
          <TotalPrice>
            +${totalPrice}/{cycleLabel}
          </TotalPrice>
        </TotalContainer>
      </SummaryContainer>
    </>
  );
};

const SummaryContainer = styled.div(
  ({ theme }) => css`
    background: ${theme.color('veryLightGrey')};
    border-radius: 8px;
    padding: ${theme.space('xxl')};
  `,
);

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlanInfo = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xxs')};
  `,
);

const PlanName = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('m')};
    font-weight: ${theme.fontWeight('medium')};
    color: ${theme.color('denim')};
  `,
);

const ChangeLink = styled.a(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('grey')};
    text-decoration: underline;
    cursor: pointer;

    transition: all 0.3 ease;

    &:hover {
      color: ${theme.color('purple')};
    }
  `,
);

const PlanPrice = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('m')};
    font-weight: ${theme.fontWeight('bold')};
    color: ${theme.color('denim')};
  `,
);

const Divider = styled.hr(
  ({ theme }) => css`
    border: 0;
    border-top: 1px solid ${theme.color('lightGrey')};
    margin: 20px 0;
  `,
);

const AddOnsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xs')};
  `,
);

const AddOnItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddOnName = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('grey')};
  `,
);

const AddOnPrice = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('denim')};
  `,
);

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TotalLabel = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSize('base')};
    color: ${theme.color('grey')};
  `,
);

const TotalPrice = styled.span(
  ({ theme }) => css`
    font-size: 20px;
    font-weight: ${theme.fontWeight('bold')};
    color: ${theme.color('purple')};
  `,
);

export default Summary;
