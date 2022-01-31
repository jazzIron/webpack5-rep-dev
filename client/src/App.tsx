import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Themes } from './theme';
import './App.scss';
import { Test } from '@src/components/test/Test';

function App(): ReactElement {
  return (
    <ThemeProvider theme={Themes}>
      <Test />
    </ThemeProvider>
  );
}

export default App;
