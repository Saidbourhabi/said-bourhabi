  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { BrowserRouter } from 'react-router-dom'
  import { HelmetProvider } from 'react-helmet-async'
  import './index.css'
  import App from './App.jsx'
  import emailjs from '@emailjs/browser';
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>,
  )
