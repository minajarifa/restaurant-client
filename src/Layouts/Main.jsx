import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
export default function Main() {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("/Login")||location.pathname.includes("/Register");
  return (
    <>
      {noHeaderFooter || <Header />}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer />}
    </>
  );
}
