import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'

import App from './App'
import { routesSection } from './routes/sections'

const router = createBrowserRouter([
  {
    Component: () => (
      <StrictMode>
        <App>
          <Outlet />
        </App>
      </StrictMode>
    ),
    children: routesSection,
  },
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
