import { createBrowserRouter } from 'react-router-dom'

import { Dashborad } from './pages/app/dashborad'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashborad /> },
  { path: '/sign-in', element: <SignIn /> },
])
