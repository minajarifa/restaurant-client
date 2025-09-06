import Title from "../../../Components/Title/Title";
import MenuItem from "../../Shared/ManuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

export default function PopularManu() {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  console.log(popular);
  console.log(menu);
  return (
    <div className="py-8">
      <Title heading={`From our manu`} subHeading={`Popular Items`} />
      <div className="grid grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}
