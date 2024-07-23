import React from 'react';
import Icon from '../../../../molecule/Icon';
import { css, styled } from 'styled-components';

const text = {
  heading: 'Thank you!',
  description:
    'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@placeholder.com.',
};

type Props = {};

const ThankYou: React.FC<Props> = () => (
  <Container>
    <Icon name="thankyou" />
    <Heading>{text.heading}</Heading>
    <Description>{text.description}</Description>
  </Container>
);

const Heading = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.fontSize('xxl')};
    color: ${theme.color('denim')};
  `,
);

const Description = styled.p(
  ({ theme }) => css`
    text-align: center;
    font-size: ${theme.fontSize('m')};
    color: ${theme.color('grey')};
  `,
);

const Container = styled.div(
  ({}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 80px;
      height: 80px;
    }
  `,
);
export default ThankYou;
