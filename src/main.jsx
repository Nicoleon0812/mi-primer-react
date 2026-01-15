import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppAcademmico from './AppAcademico.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAcademmico />
  </StrictMode>,
)
