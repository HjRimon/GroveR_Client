import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";

const Profile = () => {
  const [filteredUsers] = useUser();
  const { user } = useAuth();
  const isMember = filteredUsers.some((item) => item.role === "member");
  return (
    <div className="w-full h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white">
      <h1 className="text-4xl text-center font-bold py-10">User Profile</h1>
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
      {/* --------- */}
      <div>
        {isMember && (
          <div>
            <h1 className="md:text-4xl text-xl font-bold text-center my-7 md:my-20">
              Your Rented Apartment
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              {filteredUsers.map((item) => (
                <div key={item._id} className="bg-white rounded-2xl shadow-sm shadow-white w-80">
                  <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-indigo-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-indigo-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                    <div className="z-10 flex flex-col items-center gap-2">
                      <span className="text-white text-2xl font-bold">
                        Floor No: {item.floor_no}
                      </span>
                      <span className="text-white text-xl font-bold">
                        Apartment No: {item.apartment_no}
                      </span>
                      <div className="flex gap-2">
                        <p className="text-gray-50">{item.currentDate}</p>
                        <p className="text-gray-50">Rent: {item.rent}$</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* ----------- */}
    </div>
  );
};

export default Profile;
