import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname || "/"

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handlesubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from,{replace:true})
    });
  };
  const handleValidateCaptcher = (e) => {
    const user_captcher_value = e.target.value;
    // console.log(user_captcher_value);
    if (validateCaptcha(user_captcher_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="min-h-screen my-10 hero bg-base-200">
      <Helmet>
        <title>Restaurant || Login</title>
      </Helmet>
      <div className="flex-col hero-content md:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="w-1/2 max-w-sm shadow-2xl card bg-base-100">
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
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcher}
                  name="captcha"
                  type="text"
                  className="input"
                  placeholder="Type the text captcha above"
                />
              </div>

              <input
                disabled={disabled}
                className="mt-4 btn btn-neutral"
                type="submit"
                value="Login"
                id=""
              />
            </fieldset>
          </form>
          <p className="mb-8 ml-5">
            New Here! please
            <Link className="mx-2 text-blue-500" to={`/Register`}>
              Register
            </Link>
            Now
          </p>
        </div>
      </div>
    </div>
  );
}
