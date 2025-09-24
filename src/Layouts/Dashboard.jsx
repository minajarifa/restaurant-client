import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex">
        {/* dashboard side ber */}
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={`dashboard/cart`}>My cart</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
