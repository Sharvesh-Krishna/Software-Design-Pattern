import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import { ToastProvider } from '@radix-ui/react-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ToastProvider>
      <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
