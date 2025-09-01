import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../../public/images/imagesCategory/image1.jpeg"
import image2 from "../../../../public/images/imagesCategory/image2.jpeg"
import image3 from "../../../../public/images/imagesCategory/image3.jpeg"
import image4 from "../../../../public/images/imagesCategory/image4.jpeg"
import image5 from "../../../../public/images/imagesCategory/image5.jpeg"
import image6 from "../../../../public/images/imagesCategory/image6.jpeg"


export default function Category() {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full h-96" src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-96" src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-96" src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-96" src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-96" src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-96" src={image6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
