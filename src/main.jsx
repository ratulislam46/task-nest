import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProver from './auth/AuthProvider/AuthProver.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProver>
      <RouterProvider router={router} />
      <Toaster position='top-right'></Toaster>
    </AuthProver>
  </StrictMode>,
)
