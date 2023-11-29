import useAuth from "../../Hooks/useAuth";
import "./area.css";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { toast } from "react-toastify";
import { useState } from "react";
const AppartmentRooms = ({ item }) => {
  const { floor_no, block_name, apartment_no, rent, image, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [agreementSubmitted, setAgreementSubmitted] = useState(false);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  const handleAddToCart = (room) => {
    if (agreementSubmitted) {
      return;
    }
    if (user && user.email) {
      const cartItem = {
        roomId: _id,
        email: user.email,
        name: user.displayName,
        floor_no,
        block_name,
        apartment_no,
        rent,
        image,
      };
      const userItem = {
        roomId: _id,
        email: user.email,
        name: user.displayName,
        floor_no,
        block_name,
        apartment_no,
        rent,
        image,
        role: "",
        currentDate: formattedDate,
      };

      Swal.fire({
        title: "Can I confirm your agreement with the request?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.post("/carts", cartItem).then((resCart) => {
            if (resCart.data.insertedId) {
              axiosSecure.post("/users", userItem).then((resUser) => {
                console.log(resUser.data);
                toast.success("Your agreement request has been recorded");
                setAgreementSubmitted(true);
              });
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to sign the agreement!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-10 w-[92%] mx-auto mb-10">
      <div>
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#b9eb69] z-20 shadow-xl after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
          <img className="rounded-xl w-64 h-64 mb-1" src={image} />

          <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
            Floor No : {floor_no}
          </p>
          <div className="flex text-gray-500 font-semibold text-xl gap-5">
            <h1>Appartment No: ({apartment_no})</h1>
            <h1>Block No: {block_name}</h1>
          </div>
          <div className="ordernow flex flex-row justify-between items-center w-full">
            <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
              $ {rent}
            </p>
            <p
              onClick={() => handleAddToCart(item)}
              className={`${
                agreementSubmitted ? "opacity-50 cursor-not-allowed" : ""
              } btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn`}
            >
              {agreementSubmitted ? "Pending" : "Agreement"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppartmentRooms;
