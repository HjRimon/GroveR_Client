import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const Profile = () => {
  const [cart] = useCart();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.rent, 0);
  return (
    <div className="w-[98%] h-[100vh] mx-auto">
      <div className="ml-7 md:ml-[130px] lg:ml-[700px]">
        <h1 className="text-4xl text-center font-bold my-10">
          User <span className="text-[#4A00FF]">Profile</span>
        </h1>
        <div className="relative group  cursor-pointer group overflow-hidden  text-gray-50 md:h-96 md:w-96  rounded-2xl hover:duration-700 duration-700">
          <div
            className="w-56 h-72 md:w-96 md:h-96"
            style={{
              backgroundImage: `url(${user.photoURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-row justify-between">
              <svg
                className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              ></svg>
              <svg
                className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              ></svg>
            </div>
          </div>

          <div className="absolute bg-gray-50 -bottom-24 md:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-[#4A00FF] font-bold text-xs mb-4 md:mb-5">PROFILE</span>
            <span className="text-gray-800 font-bold md:text-3xl">{user.displayName}</span>
            <p className="text-neutral-800 md:text-xl">Email: {user.email}</p>
          </div>
        </div>
      </div>
      {/* Cart */}
      <div className="my-16">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-6xl">Total Price : {totalPrice}</h1>
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Pay Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
