import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Themes } from './theme';
import './App.scss';

function App(): ReactElement {
  return (
    <ThemeProvider theme={Themes}>
      <div className="test">테스트</div>;
    </ThemeProvider>
  );
}

export default App;
