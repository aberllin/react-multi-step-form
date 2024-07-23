import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyle } from './theme/GlobalStyle';
import { RecoilRoot } from 'recoil';

const container = document.getElementById('root') as HTMLElement
if (!container) {
  throw new Error('Root container not found');
}
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
);
