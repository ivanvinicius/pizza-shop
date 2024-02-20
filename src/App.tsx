import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from '~/components/ui/sonner'

import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster toastOptions={{ duration: 5000 }} />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
