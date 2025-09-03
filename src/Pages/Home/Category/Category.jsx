import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../../Components/Title/Title";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../../public/images/imagesCategory/image1.jpeg";
import image2 from "../../../../public/images/imagesCategory/image2.jpeg";
import image3 from "../../../../public/images/imagesCategory/image3.jpeg";
import image4 from "../../../../public/images/imagesCategory/image4.jpeg";
import image5 from "../../../../public/images/imagesCategory/image5.jpeg";
import image6 from "../../../../public/images/imagesCategory/image6.jpeg";

export default function Category() {
  return (
    <div className="text-center">
      <Title heading={`Foods Item`} subHeading={`menu category`} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-96" src={image1} alt="" />
          <h1 className="-mt-16 text-4xl text-center text-white uppercase">
            Sorma
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src={image2} alt="" />
          <h1 className="mb-6 -mt-16 text-4xl text-center text-white uppercase">
            Burger
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src={image3} alt="" />
          <h1 className="mb-6 -mt-16 text-4xl text-center text-white uppercase ">
            Nun ruti
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src={image4} alt="" />
          <h1 className="mb-6 -mt-16 text-4xl text-center text-white uppercase ">
            Frience fry
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src={image5} alt="" />
          <h1 className="mb-6 -mt-16 text-4xl text-center text-white uppercase ">
            caomin
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src={image6} alt="" />
          <h1 className="mb-6 -mt-16 text-4xl text-center text-white uppercase ">
            Nudooles
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
