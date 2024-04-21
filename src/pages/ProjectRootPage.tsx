import MainNavigation from "@/components/MainNavigation"
import { Outlet } from "react-router-dom"


const ProjectRootPage = () => {
  return (
    <div className="project-box">
      <MainNavigation />
      <Outlet />
    </div>
  )
}

export default ProjectRootPage