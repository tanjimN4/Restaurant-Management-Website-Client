import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes';
import AuthProvider from './AuthProvider/AuthProvider';
import Single from './SingleItemGate/Single';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-0 md:mx-0 lg:mx-10'>
    <React.StrictMode>
      <AuthProvider>
        <Single>
        <RouterProvider router={router} />
        </Single>
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
