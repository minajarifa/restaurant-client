import Title from "../../../Components/Title/Title";
import featured from "../../../../public/images/Fetured/featured.jpeg"
import "./Featured.css"

export default function Featured() {
  return (
   <div>
      <Title heading={"Featured Item"} subHeading={"check it out"} />
     <div className="my-10 mt-8 text-white bg-fixed featured-item">
      <div className="items-center justify-center py-20 px-36 md:flex bg-slate-700 bg-opacity-60">
        <div>
          <img src={featured} alt=""/>
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
          <button className="border-0 border-b-2 btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
   </div>
  );
}