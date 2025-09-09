import MenuItem from "../../Shared/ManuItem/MenuItem";

export default function MenuCategory({ items }) {
  return (
    <div>
      <div className="grid gap-5 p-4 my-20 md:grid-cols-2 sm:grid-cols-1">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}
