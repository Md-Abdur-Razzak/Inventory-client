import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import { myRoute } from './Route/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRoute}></RouterProvider>
  </React.StrictMode>,
)
