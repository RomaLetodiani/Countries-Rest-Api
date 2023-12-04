import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DarkModeProvider } from './contexts/DarkModeContext.tsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </DarkModeProvider>
  </React.StrictMode>
);
