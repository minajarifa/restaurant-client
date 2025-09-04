import Banner from "./Banner/Banner";
import PopularManu from "./PopularManu/PopularManu";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <PopularManu/>
      <Featured/>
      <Testimonials/>
    </div>
  )
}