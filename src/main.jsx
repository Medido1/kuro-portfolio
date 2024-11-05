import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './components/Main.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cv from './components/CV.jsx';
import AboutMe from './components/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <AboutMe />
          }
        ]
      },
      {
        path: "cv",
        element: <Cv />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
