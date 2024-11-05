import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Main from './components/Main.jsx'
import Cv from './components/CV.jsx';
import AboutMe from './components/AboutMe.jsx';
import MyWork from './components/MyWork.jsx';
import Contact from './components/Contact.jsx'

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
      },
      {
        path: "my work",
        element: <MyWork />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
