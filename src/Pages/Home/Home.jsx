import Banner from "./Banner/Banner";
import PopularManu from "./Banner/PopularManu/PopularManu";
import Category from "./Category/Category";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <PopularManu/>
    </div>
  )
}
