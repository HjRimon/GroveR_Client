import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";

const MakePayment = () => {
  // const [cart] = useCart();
  // const totalPrice = cart.reduce((total, item) => total + item.rent, 0);
  const [filteredUsers] = useUser();
  const isMember = filteredUsers.some((item) => item.role === "member");

  return (
    <div className="w-full h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white">
      <h1 className="text-4xl font-bold text-center py-20">Pay Your Rent</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {isMember &&
          filteredUsers.map((item) => (
            <div
              key={item._id}
              className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={item.image} />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Floor No: {item.floor_no}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Apartment No: {item.apartment_no}
                </p>
                <div className="flex gap-3 justify-start items-start">
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {item.currentDate}
                  </p>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Rent: {item.rent}$
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to={`ipayment/${item._id}`}>
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Pay Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MakePayment;
