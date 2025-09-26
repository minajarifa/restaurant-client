import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
    const {googleSigning}=useAuth()
    const handleGoogleLogin=()=>{
        googleSigning()
        .then(result=>{
            console.log(result.user)
        })
    }
  return (
    <div className="mb-10 text-center">
        <div className="divider"></div>
      {/* Google */}
      <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] m-2">
        <FcGoogle className="text-xl" />
        Login with Google
      </button>
      <button className="btn bg-white text-black border-[#e5e5e5] m-2">
        <FaGithub className="text-xl" />
        Login with Github
      </button>
    </div>
  );
}
