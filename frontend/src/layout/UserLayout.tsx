import { Outlet } from "react-router-dom"
import Avatar from "../component/Avatar"



const UserLayout = () => {
  return (
    <div className="">
      <div className="flex border-b sm:px-40 sm:py-4 p-2 justify-between">
        <div>Blogsite</div>
        <div><Avatar name="Aakash" size="big" /></div>

      </div>
      
        <Outlet />

      
    </div>
  )
}

export default UserLayout
