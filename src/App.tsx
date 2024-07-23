import React from 'react';
import { css, styled } from 'styled-components';
import Form from './components/pages/Form';

const App = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

const Container = styled.div(
  ({ theme }) => css`
    background: ${theme.color('background')};
    height: 100vh;
  `,
);

export default App;
