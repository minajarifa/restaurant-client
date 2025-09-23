import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
            <li>
                <NavLink to={`/cart`}></NavLink>
            </li>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
