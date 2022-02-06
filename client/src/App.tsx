import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Themes } from './theme';
import './App.scss';
import { Test } from '@components/test/Test';
import GlobalStyle from './GlobalStyle';

function App(): ReactElement {
  return (
    <ThemeProvider theme={Themes}>
      <GlobalStyle />
      <Test />
    </ThemeProvider>
  );
}

export default App;
