import Banner from "./Banner/Banner";
import PopularManu from "./PopularManu/PopularManu";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Restaurant || Home</title>
      </Helmet>
      <Banner/>
      <Category/>
      <PopularManu/>
      <Featured/>
      <Testimonials/>
    </div>
  )
}