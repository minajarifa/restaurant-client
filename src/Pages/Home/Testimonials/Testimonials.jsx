import Title from "../../../Components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <section>
      <Title subHeading={"what our client say"} heading={"Testimonials"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       reviews:  {reviews?.length}
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review?._id}>Slide 1</SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}
