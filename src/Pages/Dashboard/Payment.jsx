import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../Hooks/useUser";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const { id } = useParams();
  const [filteredUsers] = useUser();
  const selectedUser = filteredUsers.find((user) => user._id === id);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discountedRent, setDiscountedRent] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("");

  const applyCoupon = async () => {
    try {
      const response = await fetch(
        "https://building-management-server-beta.vercel.app/api/coupons"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch coupons");
      }

      const coupons = await response.json();

      const validCoupon = coupons.find((coupon) => coupon.code === appliedCoupon);

      if (validCoupon) {
        const discountPercentage = parseInt(validCoupon.percentage, 10);
        const discountAmount = (selectedUser.rent * discountPercentage) / 100;
        setDiscountedRent(selectedUser.rent - discountAmount);

        toast.success("Coupon applied successfully!");
      } else {
        toast.error("Invalid coupon code");
      }
    } catch (error) {
      toast.error("Error while applying coupon");
      console.error("Error while applying coupon", error);
    }
  };

  const handlePayNow = async () => {
    try {
      if (!selectedMonth) {
        toast.error("Please select a month");
        return;
      }

      const paymentData = {
        userId: selectedUser._id,
        email: selectedUser.email,
        floorNo: selectedUser.floor_no,
        blockName: selectedUser.block_name,
        apartmentNo: selectedUser.apartment_no,
        originalRent: selectedUser.rent,
        discountedRent,
        month: selectedMonth,
      };

      const response = await fetch(
        "https://building-management-server-beta.vercel.app/api/payments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      if (response.ok) {
        toast.success("Payment successful!");
      } else {
        toast.error("Payment failed");
      }
    } catch (error) {
      toast.error("Error while processing payment");
      console.error("Error while processing payment", error);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white ">
      <Helmet>
        <title>GrooveR || Payment_Info</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center py-20">Pay Your Rent For Apartment</h1>
      {selectedUser && (
        <div className="flex flex-col items-center mt-8 md:text-3xl">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <form className="flex flex-col items-center">
            <div>
              <p>Member Email: {selectedUser.email}</p>
              <p>Floor: {selectedUser.floor_no}</p>
              <p>Block Name: {selectedUser.block_name}</p>
              <p>Apartment No: {selectedUser.apartment_no}</p>
              <p>Rent: ${selectedUser.rent}</p>
            </div>

            <label htmlFor="month" className="mb-2">
              Month:
            </label>
            <select
              id="month"
              name="month"
              className="border p-2 mb-4 text-black rounded-lg"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option disabled value="">
                Select a month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <p className="mb-4">
              Rent: ${selectedUser.rent}, Discounted Rent: ${discountedRent}
            </p>

            <label htmlFor="coupon" className="mb-2"></label>
            <div className="flex gap-3">
              <input
                type="text"
                id="coupon"
                name="coupon"
                placeholder="Apply Coupon Here"
                className="border p-2 mr-2 text-black rounded-xl"
                value={appliedCoupon}
                onChange={(e) => setAppliedCoupon(e.target.value)}
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="p-5 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
              >
                Apply Coupon
              </button>
            </div>

            <Link>
              <button
                onClick={handlePayNow}
                type="button"
                className="p-5 mt-5 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
              >
                Pay Now
              </button>
            </Link>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Payment;
