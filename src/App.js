import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { RouterConfig } from './Router';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <RouterConfig />
    </GlobalProvider>
  );
}

export default App;
