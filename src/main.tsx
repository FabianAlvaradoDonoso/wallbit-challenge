import './index.css'

import { createRoot } from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'

import App from './App'
import { routesSection } from './routes/sections'

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    children: routesSection,
  },
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
