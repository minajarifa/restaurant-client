import { FaAd, FaCalculator, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaHouseUser, FaList } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import useCart from "../hooks/useCart";

export default function Dashboard() {
  const navigate = useNavigate();
  const [cart]=useCart()
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire("user logout seccessgully!");
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex">
      {/* dashboard side ber */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-4 font-bold menu">
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaHouseUser />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaCalculator />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/cart`}>
              <RiSecurePaymentLine />
              Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaShoppingCart></FaShoppingCart>
              My cart  ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaAd />
              Add review
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaList />
              My booking
            </NavLink>
          </li>
          <div className="divider"></div>
          {/*link of home page */}
          <li>
            <NavLink to={`/`}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/Our-menu`}>
              <IoMenu />
              Our menu
            </NavLink>
          </li>
          <li>
            <NavLink to={`/Order-Now`}>
             <MdOutlineBookmarkBorder />
              Order now
            </NavLink>
          </li>
          <button onClick={handleLogOut} className="btn btn-ghost">
            <HiOutlineLogout />
            Logout
          </button>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
