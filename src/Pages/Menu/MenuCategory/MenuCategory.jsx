// import useMenu from "../../../hooks/useMenu";
// import burgerImage from "../../../../public/images/CoverImage/burger.jpeg";
// import dessertImage from "../../../../public/images/CoverImage/dessert.jpeg";
// import drinksImage from "../../../../public/images/CoverImage/drinks.jpeg";
// import HaddockImage from "../../../../public/images/CoverImage/Haddock.jpeg";
// import offeredImage from "../../../../public/images/CoverImage/offered.jpeg";
// import pizzaImage from "../../../../public/images/CoverImage/pizza.jpeg";
// import saladImage from "../../../../public/images/CoverImage/salad.jpeg";
// import soupImage from "../../../../public/images/CoverImage/soup.jpeg";
// import MenuItem from "../../Shared/ManuItem/MenuItem";
import Title from "../../../Components/Title/Title";

export default function MenuCategory({ items }) {
  console.log(items);
  // const [menu] = useMenu();
  // const popular = menu?.filter((item) => item.category === "popular");
  // const salad = menu?.filter((item) => item.category === "salad");
  // const drinks = menu?.filter((item) => item.category === "drinks");
  // const dessert = menu?.filter((item) => item.category === "dessert");
  // const pizza = menu?.filter((item) => item.category === "pizza");
  // const soup = menu?.filter((item) => item.category === "soup");
  // const offered = menu?.filter((item) => item.category === "offered");
  // const Haddock = menu?.filter((item) => item.category === "Haddock");
  console.log();
  return (
    <div>
      <Title heading={"Popular Nenu"} subHeading={"Our Food Item"} />
      <div className="grid grid-cols-2 gap-4 my-20 ">
        {/* {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))} */}
      </div>
    </div>
  );
}
