import { Parallax } from 'react-parallax';
export default function Cover({title, image}) {
  return (
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
        className='h-[500px]'
    >
       <div
      className=" hero h-[600px] my-10"
    >
      <div className="hero-overlay absolute inset-5 h-[400px] rounded-xl"></div>
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
