import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire("SweetAlert2 is working!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <Link className="m-2" to={`/`}>
        Home
      </Link>
      <Link className="m-2" to={`/Our-menu`}>
        Our Menu
      </Link>
      <Link className="m-2" to={`/Order-Now`}>
        Order Now
      </Link>
      <Link className="m-2" to={`/`}>
        <button className="btn">
          <FaShoppingCart className="mr-2" />
          <div className="badge badge-sm badge-secondary">+{cart?.length}</div>
        </button>
      </Link>
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="m-2" to={`/Login`}>
            Login
          </Link>
          <Link className="m-2" to={`/Register`}>
            register
          </Link>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="fixed z-10 border-t-0 shadow-sm bg-opacity-30 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl normal-case btn btn-ghost">Restaurant</a>
        </div>
        <div className="hidden navbar-center lg:flex">{navOptions}</div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
}
