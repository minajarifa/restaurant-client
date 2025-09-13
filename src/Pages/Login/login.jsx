import { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const captcharef = useRef(null);
  console.log(captcharef)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handlesubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleValidateCaptcher = () => {
    const user_captcher_value = captcharef.current.value;
    if (validateCaptcha(user_captche`r_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-1/2 max-w-sm  shadow-2xl">
          <form onSubmit={handlesubmitLogin} className="card-body">
            <fieldset className="fieldset">
              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="label">
                  <LoadCanvasTemplate/>
                </label>
                <input
                  ref={captcharef}
                  name="captcha"
                  type="text"
                  className="input"
                  placeholder="Type the text captcha above"
                />
                <button
                  onClick={handleValidateCaptcher}
                  className="btn btn-outline btn-xs uppercase mt-2"
                >
                  Validate
                </button>
              </div>

              <input
                disabled={disabled}
                className="btn btn-neutral mt-4"
                type="submit"
                value="Login"
                id=""
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
