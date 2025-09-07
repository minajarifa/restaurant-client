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
      <div className="items-center text-center card-body">
        <h2 className="card-title">{category} <br />{price}</h2>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
