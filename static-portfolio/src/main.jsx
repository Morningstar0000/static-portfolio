import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.scss"
import { Theme } from '@radix-ui/themes'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
   
    <App />
    
    </Theme>
 
  </React.StrictMode>,
)
