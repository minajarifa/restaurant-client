import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import burgerImage from "../../../../public/images/CoverImage/burger.jpeg";
import dessertImage from "../../../../public/images/CoverImage/dessert.jpeg";
import drinksImage from "../../../../public/images/CoverImage/drinks.jpeg";
import HaddockImage from "../../../../public/images/CoverImage/Haddock.jpeg";
import offeredImage from "../../../../public/images/CoverImage/offered.jpeg";
import pizzaImage from "../../../../public/images/CoverImage/pizza.jpeg";
import saladImage from "../../../../public/images/CoverImage/salad.jpeg";
import soupImage from "../../../../public/images/CoverImage/soup.jpeg";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/ManuItem/MenuItem";

export default function Menu() {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  const burger = menu?.filter((item) => item.category === "burger");
  const salad = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  const Haddock = menu?.filter((item) => item.category === "Haddock");
  return (
    <div>
      <Helmet>
        <title>Restaurant || Our Menu</title>
      </Helmet>
      <Cover title={`popular`} image={burgerImage}></Cover>
      {
        popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`burger`} image={burgerImage}></Cover>
      {
        burger.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`salad`} image={saladImage}></Cover>
      {
        salad.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`drinks`} image={drinksImage}></Cover>
       {
        drinks.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`dessert`} image={dessertImage}></Cover>
      {
        dessert.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`pizza`} image={pizzaImage}></Cover>
      {
        pizza.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`soup`} image={soupImage}></Cover>
      {
        soup.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`offered`} image={offeredImage}></Cover>
      {
        offered.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
      <Cover title={`Haddock`} image={HaddockImage}></Cover>
       {
        Haddock.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
    
    </div>
  );
}
