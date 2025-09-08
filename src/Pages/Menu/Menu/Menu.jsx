import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import PopularManu from "../../Home/PopularManu/PopularManu";

export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>Restaurant || Our Menu</title>
      </Helmet>
      <Cover title={`Pizza`}></Cover>
      <PopularManu />
      <Cover title={`Burger`}></Cover>
      <PopularManu />
      <Cover title={`kacci`}></Cover>
      <PopularManu />
      <Cover title={`biriani`}></Cover>
      <PopularManu />
      <div>menu</div>
    </div>
  );
}