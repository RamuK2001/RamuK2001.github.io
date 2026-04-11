import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function setDefaultDarkMode() {
  // Always set dark mode on initial load
  document.documentElement.classList.add("dark");
  // If you use localStorage for theme, set it as well:
  localStorage.setItem("theme", "dark");
}

// Call this before your app renders
setDefaultDarkMode();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
