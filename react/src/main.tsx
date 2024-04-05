import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import { AlbumFaixaProvider } from './context/albumFaixaContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlbumFaixaProvider>
        <RouterProvider router={router} />
    </AlbumFaixaProvider>
  </React.StrictMode>,
)
