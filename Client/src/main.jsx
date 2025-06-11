import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="70969322717-1efv160138gfitmbog3purufn57qie1v.apps.googleusercontent.com"> 
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
