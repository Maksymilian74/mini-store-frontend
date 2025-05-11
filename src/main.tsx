// Renders the App component with React StrictMode and React Router.
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
