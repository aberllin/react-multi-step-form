import React from 'react';
import { css, styled } from 'styled-components';

type Props = {
  heading: string;
  subHeading: string;
};

const Header: React.FC<Props> = ({ heading, subHeading }) => (
  <Container>
    <Heading>{heading}</Heading>
    <SubHeading>{subHeading} </SubHeading>
  </Container>
);

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('xxs')};
  `,
);

const Heading = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.fontSize('xxxl')};
    color: ${theme.color('denim')};
    margin: 0;
  `,
);

const SubHeading = styled.h4(
  ({ theme }) => css`
    font-size: ${theme.space('m')};
    color: ${theme.color('grey')};
    font-weight: ${theme.fontWeight('regular')};
    margin: 0;
  `,
);

export default Header;
