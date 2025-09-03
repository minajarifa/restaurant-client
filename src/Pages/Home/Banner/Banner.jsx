import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../../public/images/imagesBanner/img1.jpeg";
import img2 from "../../../../public/images/imagesBanner/img2.jpeg";
import img3 from "../../../../public/images/imagesBanner/img3.jpeg";
import img4 from "../../../../public/images/imagesBanner/img4.jpeg";
import img5 from "../../../../public/images/imagesBanner/img5.jpeg";

export default function Banner() {
  return (
    <>
      <div className="">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          stopOnHover={true}
          showStatus={false}
        >
          <div className="h-[400px]">
            {/* ekhane fixed height */}
            <img src={img1} className="object-cover w-full h-full" />
            <p className="legend">Legend 1</p>
          </div>
          <div className="h-[400px]">
            <img src={img2} className="object-cover w-full h-full" />
            <p className="legend">Legend 2</p>
          </div>
          <div className="h-[400px]">
            <img src={img3} className="object-cover w-full h-full" />
            <p className="legend">Legend 3</p>
          </div>
          <div className="h-[400px]">
            <img src={img4} className="object-cover w-full h-full" />
            <p className="legend">Legend 4</p>
          </div>
          <div className="h-[400px]">
            <img src={img5} className="object-cover w-full h-full" />
            <p className="legend">Legend 5</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}
