import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { store } from '@/state/store'
import { Provider } from 'react-redux'

import { router } from '@/router/AppRouter'
import '@/assets/fontello/css/fontello.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
