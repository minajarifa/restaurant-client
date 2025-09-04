import Title from "../../../Components/Title/Title";
import featured from "../../../../public/images/Fetured/featured.jpeg"
// import "./Featured.css"

export default function Featured() {
  return (
    <div className="featured-item">
      <Title heading={"Featured Item"} subHeading={"check it out"} />
      <div className="items-center justify-center px-16 py-8 md:flex">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Whare can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            quia modi quo facilis aut sit praesentium impedit magnam quis,
            ducimus pariatur aliquam quas vel aperiam expedita delectus rem
            quae, consectetur a similique? Neque id doloremque, voluptatum,
            delectus minus officia quidem ex est at, corrupti consectetur quia
            dolores itaque. Fugiat, odio!
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
}
