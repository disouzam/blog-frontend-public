import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Clarity from '@microsoft/clarity';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Make sure to add your actual project id instead of "yourProjectId".
const projectId = "qwk7whav75"

Clarity.init(projectId);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
