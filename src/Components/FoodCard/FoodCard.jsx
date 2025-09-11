export default function FoodCard({ item }) {
  console.log(item);
  const {category,image,name,price,recipe,}=item;
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">{price}</p>
      <div className="flex flex-col items-center card-body">
        <h2 className="card-title">{category}</h2>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline bg-slate-100">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
