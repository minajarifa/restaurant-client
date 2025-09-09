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
import Title from "../../../Components/Title/Title";

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
      {/* popular manu */}
      <div>
        <Cover title={`popular`} image={burgerImage}></Cover>
        <Title heading={"Popular Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 p-4 my-20 md:grid-cols-2 sm:grid-cols-1">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* burger menu */}
      <div>
        <Cover title={`burger`} image={burgerImage}></Cover>
        <Title heading={"Burger Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 my-20 md:grid-cols-2 ">
          {burger.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* salad menu */}
      <div>
        <Cover title={`salad`} image={saladImage}></Cover>
        <Title heading={"salad Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 p-4 my-20 md:grid-cols-2 ">
          {salad.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* drinks mane */}
      <div>
        <Cover title={`drinks`} image={drinksImage}></Cover>
        <Title heading={"drinks Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 my-20 md:grid-cols-2 ">
          {drinks.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* dessert menu */}
      <div>
        <Cover title={`dessert`} image={dessertImage}></Cover>
        <Title heading={"dessert Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 my-20 md:grid-cols-2 ">
          {dessert.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* pizza menu */}
      <div>
        <Cover title={`pizza`} image={pizzaImage}></Cover>
        <Title heading={"pizza Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 p-4 my-20 md:grid-cols-2 ">
          {pizza.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* soup menu */}
      <div>
        <Cover title={`soup`} image={soupImage}></Cover>
        <Title heading={"soup Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 my-20 md:grid-cols-2 ">
          {soup.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* offered menu */}
      <div>
        <Cover title={` offered`} image={offeredImage}></Cover>
        <Title heading={"Today's offered"} subHeading={"Don't Miss"} />
        <div className="grid gap-5 my-20 md:grid-cols-2 ">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
      {/* Haddock menu */}
      <div>
        <Cover title={`Haddock`} image={HaddockImage}></Cover>
        <Title heading={"Haddock Nenu"} subHeading={"Our Food Item"} />
        <div className="grid gap-5 my-20 md:grid-cols-2 ">
          {Haddock.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="mb-4 border-b-2 btn btn-block">Order Now</button>
      </div>
    </div>
  );
}
