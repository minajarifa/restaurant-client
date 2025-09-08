import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import burger from "../../../../public/images/CoverImage/burger.jpeg";
import dessert from "../../../../public/images/CoverImage/dessert.jpeg";
import drinks from "../../../../public/images/CoverImage/drinks.jpeg";
import Haddock from "../../../../public/images/CoverImage/Haddock.jpeg";
import offered from "../../../../public/images/CoverImage/offered.jpeg";
import pizza from "../../../../public/images/CoverImage/pizza.jpeg";
import salad from "../../../../public/images/CoverImage/salad.jpeg";
import soup from "../../../../public/images/CoverImage/soup.jpeg";
import MenuCategory from "../MenuCategory/MenuCategory";

export default function Menu() {
  //   const [menu] = useMenu();
  //   const popular = menu?.filter((item) => item.category === "popular");
  //   const salad = menu?.filter((item) => item.category === "salad");
  //   const drinks = menu?.filter((item) => item.category === "drinks");
  //   const dessert = menu?.filter((item) => item.category === "dessert");
  //   const pizza = menu?.filter((item) => item.category === "pizza");
  //   const soup = menu?.filter((item) => item.category === "soup");
  //   const offered = menu?.filter((item) => item.category === "offered");
  //   const Haddock = menu?.filter((item) => item.category === "Haddock");
  return (
    <div>
      <Helmet>
        <title>Restaurant || Our Menu</title>
      </Helmet>
      <Cover title={`burger`} image={burger}></Cover>
      <MenuCategory />
      <Cover title={`salad`} image={salad}></Cover>
      <MenuCategory />
      <Cover title={`drinks`} image={drinks}></Cover>
      <MenuCategory />
      <Cover title={`dessert`} image={dessert}></Cover>
      <MenuCategory />
      <Cover title={`pizza`} image={pizza}></Cover>
      <MenuCategory />
      <Cover title={`soup`} image={soup}></Cover>
      <MenuCategory />
      <Cover title={`offered`} image={offered}></Cover>
      <MenuCategory />
      <Cover title={`Haddock`} image={Haddock}></Cover>
      <MenuCategory />
      <div>menu</div>
    </div>
  );
}
