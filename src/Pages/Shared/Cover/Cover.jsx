import { Parallax } from 'react-parallax';
export default function Cover({title, image}) {
  return (
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div
      className=" hero h-[600px] my-10"
    >
      <div className="hero-overlay"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
}
