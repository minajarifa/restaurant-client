import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

export default function Main() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
