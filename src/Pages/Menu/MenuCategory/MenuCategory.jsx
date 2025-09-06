import useMenu from "../../../hooks/useMenu";

export default function MenuCategory() {
      const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  const salad = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  const Haddock = menu?.filter((item) => item.category === "Haddock");
  console.log(popular, salad,drinks,dessert,pizza,offered,soup,Haddock)
  return (
    <div>
    
    </div>
  )
}
