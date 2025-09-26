import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SicialLogin/SocialLogin";

export default function Register() {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handlesubmitSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password).then((result) => {
      const user = result.user;
      updateUserProfile(name, photo)
        .then(() => {
          const userInfo = {
            name,
            photo,
            email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data.insertedId);
            console.log("user added the database");
          });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(user);
      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User registered successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div>
      <Helmet>
        <title>Restaurant || Signin</title>
      </Helmet>
      <div className="min-h-screen my-10 hero bg-base-200">
        <div className="flex-col hero-content md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="w-1/2 max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handlesubmitSignin} className="card-body">
              <fieldset className="fieldset">
                <div>
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="User name"
                    required
                  />
                </div>
                <div>
                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="User photo url"
                    required
                  />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                </div>
                <input
                  className="mt-4 btn btn-primary"
                  type="submit"
                  value="Sign up"
                  id=""
                />
              </fieldset>
            </form>
            <p className="mb-8 ml-5">
              Already have an account please
              <Link className="mx-2 text-blue-500" to={`/Login`}>
                Login
              </Link>
              Now
            </p>
           
              <SocialLogin />
           
          </div>
        </div>
      </div>
    </div>
  );
}
