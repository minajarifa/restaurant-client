import { Link } from "react-router-dom";
import MenuItem from "../../Shared/ManuItem/MenuItem";

export default function MenuCategory({ items }) {
  return (
    <div>
      <div className="grid gap-5 p-4 my-10 md:grid-cols-2 sm:grid-cols-1">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to={`/Order-Now`}>
        <button className="w-full border-0 border-b-2 btn btn-outline">Order Now</button>
        </Link>
      </div>
    </div>
  );
}