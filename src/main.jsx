import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import { myRoute } from './Route/Route'
import AuthProvider from './Route/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={myRoute}></RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
)
