import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

// Render multiple components within a single parent element
createRoot(
  document.querySelector('#app'),
).render(
  <div>
    <HomePage />
  </div>
);
