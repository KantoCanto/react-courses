//react imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

//app import
import {App} from './App.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  }
])

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode >
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
