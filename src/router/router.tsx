import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import AuthenticationPage from "../pages/AuthenticationPage";
import Homepage from "@/pages/Homepage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Project from "@/components/Project";
import ProjectRootPage from "@/pages/ProjectRootPage";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: 'auth', element: <AuthenticationPage /> },
      { path: 'about', element: <About /> },
      {
        path: 'project',
        element: <ProjectRootPage />,
        children: [
          { index: true, element: <Project />}
        ]
      },
      { path: 'contact', element: <Contact /> },
      { path: 'logout', },
    ]
  }
])