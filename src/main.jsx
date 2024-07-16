import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import Layout3 from './Layout.jsx'
import Form from "./ResumeBuilder/Forms.jsx"
import Selectionresume from "./ResumeBuilder/Selectionresume.jsx"
import Uploadresume from "./ResumeBuilder/Uploadresume.jsx"
import { ResumeProvider } from './ResumeContext.jsx'
const route =createBrowserRouter([
  
  {
    element:<Layout3/>,
    children:[
      {
        path:"form",
        element:<Form/>
      },
      {
        path:"resumebuilder",
        element:<Selectionresume />
      },
      {
        path:"/",
         element:<Selectionresume />
      },
      {
        path:"/uploadresume",
        element:<Uploadresume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={route}/>
    {/* <App /> */}
    <ResumeProvider>
    <Toaster/>
    
    </ResumeProvider>
  </React.StrictMode>,
)
