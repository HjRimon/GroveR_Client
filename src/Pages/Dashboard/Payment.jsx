// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useUser from "../../Hooks/useUser";
// import { useParams } from "react-router-dom";

// const Payment = () => {
//   const { id } = useParams();
//   const [filteredUsers] = useUser();
//   const selectedUser = filteredUsers.find((user) => user._id === id);
//   const [appliedCoupon, setAppliedCoupon] = useState("");
//   const [discountedRent, setDiscountedRent] = useState(0);

//   const applyCoupon = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/coupons");
//       if (!response.ok) {
//         throw new Error("Failed to fetch coupons");
//       }

//       const coupons = await response.json();

//       const validCoupon = coupons.find((coupon) => coupon.code === appliedCoupon);

//       if (validCoupon) {
//         const discountPercentage = parseInt(validCoupon.percentage, 10);
//         const discountAmount = (selectedUser.rent * discountPercentage) / 100;
//         setDiscountedRent(selectedUser.rent - discountAmount);

//         // Show success toast
//         toast.success("Coupon applied successfully!");
//       } else {
//         // Handle invalid coupon code and show error toast
//         toast.error("Invalid coupon code");
//       }
//     } catch (error) {
//       // Handle errors and show error toast
//       toast.error("Error while applying coupon");
//       console.error("Error while applying coupon", error);
//     }
//   };
//   const handlePayNow = async () => {
//     try {
//       // Prepare payment data
//       const paymentData = {
//         userId: selectedUser._id,
//         email: selectedUser.email,
//         floorNo: selectedUser.floor_no,
//         blockName: selectedUser.block_name,
//         apartmentNo: selectedUser.apartment_no,
//         originalRent: selectedUser.rent,
//         discountedRent,
//         month: selectedMonth, // Assuming you have a state variable for selectedMonth
//         // Add other payment-related data as needed
//       };

//       // Send payment data to the backend
//       const response = await fetch("http://localhost:5000/api/payments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(paymentData),
//       });

//       if (response.ok) {
//         // Payment successful, you can redirect or show a success message
//         toast.success("Payment successful!");
//       } else {
//         // Payment failed, show an error message
//         toast.error("Payment failed");
//       }
//     } catch (error) {
//       // Handle errors and show error toast
//       toast.error("Error while processing payment");
//       console.error("Error while processing payment", error);
//     }
//   };

//   return (
//     <div className="w-[100%] h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white ">
//       <h1 className="text-4xl font-bold text-center py-20">Pay For Your Rent Apartment</h1>
//       {selectedUser && (
//         <div className="flex flex-col items-center mt-8 md:text-3xl">
//           <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
//           <form className="flex flex-col items-center">
//             {/* Display read-only fields */}
//             {/* ... (Add fields for member email, floor, block name, apartment no, rent) */}
//             <div>
//               <p>Member Email: {selectedUser.email}</p>
//               <p>Floor: {selectedUser.floor_no}</p>
//               <p>Block Name: {selectedUser.block_name}</p>
//               <p>Apartment No: {selectedUser.apartment_no}</p>
//               <p>Rent: ${selectedUser.rent}</p>
//             </div>

//             {/* Month selection input */}
//             <label htmlFor="month" className="mb-2">
//               Month:
//             </label>
//             <select id="month" name="month" className="border p-2 mb-4 text-black">
//               <option value="January">January</option>
//               <option value="February">February</option>
//               <option value="March">March</option>
//               <option value="April">April</option>
//               <option value="May">May</option>
//               <option value="June">June</option>
//               <option value="July">July</option>
//               <option value="August">August</option>
//               <option value="September">September</option>
//               <option value="October">October</option>
//               <option value="November">November</option>
//               <option value="December">December</option>
//             </select>

//             {/* Display rent and discounted rent */}
//             <p className="mb-4">
//               Rent: ${selectedUser.rent}, Discounted Rent: ${discountedRent}
//             </p>

//             {/* Coupon input and apply button */}
//             <label htmlFor="coupon" className="mb-2">
//               Coupon:
//             </label>
//             <div className="flex">
//               <input
//                 type="text"
//                 id="coupon"
//                 name="coupon"
//                 className="border p-2 mr-2 text-black"
//                 value={appliedCoupon}
//                 onChange={(e) => setAppliedCoupon(e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={applyCoupon}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Apply Coupon
//               </button>
//             </div>

//             {/* Submit/pay button */}
//             <Link>
//               <button
//                 onClick={handlePayNow}
//                 type="button"
//                 className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
//               >
//                 Pay Now
//               </button>
//             </Link>
//           </form>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Payment;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../Hooks/useUser";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const [filteredUsers] = useUser();
  const selectedUser = filteredUsers.find((user) => user._id === id);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discountedRent, setDiscountedRent] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(""); // State for selected month

  const applyCoupon = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/coupons");
      if (!response.ok) {
        throw new Error("Failed to fetch coupons");
      }

      const coupons = await response.json();

      const validCoupon = coupons.find((coupon) => coupon.code === appliedCoupon);

      if (validCoupon) {
        const discountPercentage = parseInt(validCoupon.percentage, 10);
        const discountAmount = (selectedUser.rent * discountPercentage) / 100;
        setDiscountedRent(selectedUser.rent - discountAmount);

        // Show success toast
        toast.success("Coupon applied successfully!");
      } else {
        // Handle invalid coupon code and show error toast
        toast.error("Invalid coupon code");
      }
    } catch (error) {
      // Handle errors and show error toast
      toast.error("Error while applying coupon");
      console.error("Error while applying coupon", error);
    }
  };

  const handlePayNow = async () => {
    try {
      // Check if a month is selected
      if (!selectedMonth) {
        toast.error("Please select a month");
        return;
      }

      // Prepare payment data
      const paymentData = {
        userId: selectedUser._id,
        email: selectedUser.email,
        floorNo: selectedUser.floor_no,
        blockName: selectedUser.block_name,
        apartmentNo: selectedUser.apartment_no,
        originalRent: selectedUser.rent,
        discountedRent,
        month: selectedMonth,
        // Add other payment-related data as needed
      };

      // Send payment data to the backend
      const response = await fetch("http://localhost:5000/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        // Payment successful, you can redirect or show a success message
        toast.success("Payment successful!");
      } else {
        // Payment failed, show an error message
        toast.error("Payment failed");
      }
    } catch (error) {
      // Handle errors and show error toast
      toast.error("Error while processing payment");
      console.error("Error while processing payment", error);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white ">
      <h1 className="text-4xl font-bold text-center py-20">Pay Your Rent For Apartment</h1>
      {selectedUser && (
        <div className="flex flex-col items-center mt-8 md:text-3xl">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <form className="flex flex-col items-center">
            {/* Display read-only fields */}
            <div>
              <p>Member Email: {selectedUser.email}</p>
              <p>Floor: {selectedUser.floor_no}</p>
              <p>Block Name: {selectedUser.block_name}</p>
              <p>Apartment No: {selectedUser.apartment_no}</p>
              <p>Rent: ${selectedUser.rent}</p>
            </div>

            {/* Month selection input */}
            <label htmlFor="month" className="mb-2">
              Month:
            </label>
            <select
              id="month"
              name="month"
              className="border p-2 mb-4 text-black"
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

            {/* Display rent and discounted rent */}
            <p className="mb-4">
              Rent: ${selectedUser.rent}, Discounted Rent: ${discountedRent}
            </p>

            {/* Coupon input and apply button */}
            <label htmlFor="coupon" className="mb-2">
              Coupon:
            </label>
            <div className="flex">
              <input
                type="text"
                id="coupon"
                name="coupon"
                className="border p-2 mr-2 text-black"
                value={appliedCoupon}
                onChange={(e) => setAppliedCoupon(e.target.value)}
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Apply Coupon
              </button>
            </div>

            {/* Submit/pay button */}
            <Link>
              <button
                onClick={handlePayNow}
                type="button"
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
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
