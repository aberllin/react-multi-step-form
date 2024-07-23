import React from 'react';
import Button from '../../atoms/Button';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { infoErrors } from '../../pages/Form/state';
import hasErrors from '../../pages/Form/utils/hasErrors';
import isMobileBreakpoint from '../../../utils/isMobileBreakpoint';

type Props = {
  isLastStep?: boolean;
  allowedGoNext?: boolean;
  goBack?: () => void;
  onClick: () => void;
};

const NavigationBar: React.FC<Props> = ({ goBack, onClick, isLastStep }) => {
  const isMobile = isMobileBreakpoint();
  const errorsState = useRecoilValue(infoErrors);
  const _hasErrors = hasErrors(errorsState);

  const navigationButtons = (
    <>
      {/* Empty div to push NextButton to the right */}
      <div>
        {goBack && (
          <Button appearance="tertiary" label="Go Back" onClick={goBack} />
        )}
      </div>
      <Button
        disabled={_hasErrors}
        label={isLastStep ? 'Confirm' : 'Next step'}
        onClick={e => {
          e.preventDefault();
          if (!_hasErrors) {
            onClick();
          }
        }}
        appearance={isLastStep ? 'secondary' : 'primary'}
      />
    </>
  );

  if (isMobile) return <MobileContainer>{navigationButtons}</MobileContainer>;

  return <Container>{navigationButtons}</Container>;
};

const Container = styled.div(
  ({}) => css`
    display: flex;
    justify-content: space-between;
  `,
);

const MobileContainer = styled.div(
  ({ theme }) => css`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.color('white')};
    padding: ${theme.space('base')};
    width: 100%;
    box-sizing: border-box;
  `,
);

export default NavigationBar;
