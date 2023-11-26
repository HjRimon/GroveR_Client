import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email };
        axios
          .post("https://study-assignment-server-lac.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
        e.target.reset();
        localStorage.setItem("loginSuccess", "true");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed. Please try again.");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    // <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center hero min-h-screen bg-base-200 font-pec">
    //   <ToastContainer position="top-right" autoClose={3000} />
    //   <img className="h-[700px] w-[800px]" src="https://i.ibb.co/TryB3Gg/zyro-image.png" />
    //   <div className="hero-content flex-col">
    //     <div className="text-center">
    //       <h1 className="text-5xl font-bold mb-4">Login now!</h1>
    //     </div>
    //     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <div className="card-body">
    //         <form onSubmit={handleLogin}>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Email</span>
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="email"
    //               required
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Password</span>
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               required
    //               placeholder="password"
    //               className="input input-bordered"
    //             />
    //             <label className="label">
    //               <a href="#" className="label-text-alt link link-hover">
    //                 Forgot password?
    //               </a>
    //             </label>
    //           </div>
    //           <div className="form-control mt-6">
    //             <button className="btn btn-primary">Login</button>
    //           </div>
    //         </form>
    //         <p className="font-semibold">
    //           New to this website?
    //           <Link to={"/regi"}>
    //             <button className="btn btn-link">Please register</button>
    //           </Link>
    //         </p>
    //         <p>
    //           <button onClick={handleGoogleSignIn} className="btn">
    //             <FaGoogle></FaGoogle>
    //           </button>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // ===============
    <div>
      <Helmet>
        <title>GrooveR | | LogIn</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex justify-center items-center">
              <img src="https://i.ibb.co/f8vgwnB/favicon.png" className="w-10 h-9 -ml-1" />
              <p className="text-[#667EEA] font-bold text-xl">GrooveR</p>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Log In</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Log In with Google</span>
                  </button>
                </div>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or log in with e-mail
                  </div>
                </div>
                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleLogin}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="password"
                        className="input input-bordered"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy={7} r={4} />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">Log In</span>
                      </button>
                    </div>
                  </form>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                  <p className="mt-2 text-xs text-gray-600 text-center">
                    New to this website?
                    <Link to={"/regi"}>
                      <button className="btn btn-link">Please register</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
