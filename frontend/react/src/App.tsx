import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { AppRouter } from 'AppRouter';
import { GlobalErrorHandler } from 'common/components/GlobalErrorHandler';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

loadDevMessages();
loadErrorMessages();

function App() {
  return (
    <BrowserRouter>
      <GlobalErrorHandler>
        <AppRouter />
      </GlobalErrorHandler>
    </BrowserRouter>
  );
}

export default App;
