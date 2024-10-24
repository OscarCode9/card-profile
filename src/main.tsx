import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './UI/Components/ProfileCard/ProfileCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
