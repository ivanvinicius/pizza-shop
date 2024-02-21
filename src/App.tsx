import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from '~/components/ui/sonner'

import { ThemeProvider } from './contexts/theme-provider'
import { router } from './router'

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster toastOptions={{ duration: 5000 }} />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
