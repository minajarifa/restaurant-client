import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../../../../public/imagesBanner/img1.jpeg"
import img2 from "../../../../public/imagesBanner/img2.jpeg"
import img3 from "../../../../public/imagesBanner/img3.jpeg"
import img4 from "../../../../public/imagesBanner/img4.jpeg"
import img5 from "../../../../public/imagesBanner/img5.jpeg"

export default function Banner() {
  return (
    <div className="h-auto">
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div >
          <img  src={img1}/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img4}/>
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">Legend 5</p>
        </div>
        
      </Carousel>
    </div>
  );
}
