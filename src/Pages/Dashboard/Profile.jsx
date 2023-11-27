import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const Profile = () => {
  const [cart] = useCart();
  const { user } = useAuth();
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

      {/* --------- */}
      <div>
        <h1 className="md:text-4xl text-xl font-bold text-center -ml-12 w-full my-9 md:my-20 md:ml-10 lg:ml-[355px]">
          Your Pending Request
        </h1>
        <div>
          <table className="table w-full -ml-16 md:ml-5 lg:ml-[400px]">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Apartment No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.apartment_no}</td>
                  <th>
                    <button className="btn btn-info btn-outline btn-xs">pending</button>
                  </th>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
      {/* ----------- */}
    </div>
  );
};

export default Profile;
