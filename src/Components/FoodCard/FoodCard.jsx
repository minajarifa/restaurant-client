import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
export default function FoodCard({ item }) {
  const { category, image, name, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddToCard = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
        recipe,
        category,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log("res.data", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `${name} added to you cart`,
            icon: "success",
            showCancelButton:false,
            draggable: true,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // sent the user to login

          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">
        {price}
      </p>
      <div className="flex flex-col items-center card-body">
        <h2 className="card-title">{category}</h2>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCard(item)}
            className="mt-4 border-0 border-b-4 border-orange-400 btn btn-outline "
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
