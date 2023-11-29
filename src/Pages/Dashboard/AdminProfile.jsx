import useAuth from "../../Hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();
  return (
    <div className="w-[100%] h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white">
      <h1 className="text-4xl text-center font-bold py-10">Admin Profile</h1>
      <div className="flex justify-center items-center">
        <div className="relative group  cursor-pointer group overflow-hidden  text-gray-50 md:h-96 md:w-96  rounded-2xl hover:duration-700 duration-700 flex justify-center items-center">
          <div
            className="w-96 h-96"
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

          <div className="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-[#4A00FF] font-bold text-xs mb-4 md:mb-5">PROFILE</span>
            <span className="text-gray-800 font-bold md:text-3xl">{user.displayName}</span>
            <p className="text-neutral-800 md:text-xl">Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
