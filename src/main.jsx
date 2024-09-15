import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider  >
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
