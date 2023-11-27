import useCart from "../../Hooks/useCart";

const MakePayment = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.rent, 0);
  return (
    <div>
      <div>
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
        <div>
          {/* In this page there will be a form containing some fields named member
email(read only), floor(read only), block name(read only), apartment
no(read only), rent(read only), month(which month’s rent you want to
pay) and a submit/pay button */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>image</th>
                  <th>email</th>
                  <th>Floor No</th>
                  <th>Block No</th>
                  <th>Apartment No</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
