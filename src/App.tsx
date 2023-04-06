import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRoutes } from './routes/routes';
import './App.css';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  );
}

export default App;
