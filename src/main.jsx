import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppLogo from "./assets/AppLogo.png";

const favicon = document.querySelector("link[rel='icon']");
if (favicon) {
  favicon.href = AppLogo;
}

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>
)
