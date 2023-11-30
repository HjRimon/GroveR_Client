import { useState } from "react";
import usePayment from "./usePayment";

const PaymentHistory = () => {
  const [filteredUsers, setFilteredUsers] = usePayment();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPayments = filteredUsers.filter(
    (item) => item.month && item.month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[100%] h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white ">
      <div className="flex justify-center items-center py-10 md:py-20">
        <input
          className="input"
          type="text"
          placeholder="Search by month name"
          value={searchTerm}
          onChange={handleSearchTermChange}
          style={{
            "--input-focus": "#2d8cf0",
            "--font-color": "#fefefe",
            "--font-color-sub": "#7e7e7e",
            "--bg-color": "#111111",
            "--main-color": "#fefefe",
            width: "200px",
            height: "40px",
            borderRadius: "5px",
            border: "2px solid var(--main-color)",
            backgroundColor: "var(--bg-color)",
            boxShadow: "4px 4px var(--main-color)",
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--font-color)",
            padding: "5px 10px",
            outline: "none",
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {filteredPayments.map((item) => (
          <div
            key={item._id}
            className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-cyan-800 via-cyan-700 to-cyan-500 text-gray-50 w-72"
          >
            <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-72 h-48  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
              <div className="text p-3 flex flex-col justify-evenly h-full">
                <span className="font-bold text-2xl">Payment Successful</span>
                <p className="subtitle">
                  Pay : {item.discountedRent > 0 ? item.discountedRent : item.originalRent} $
                </p>
                <div className="flex gap-2 justify-start items-start">
                  <p className="subtitle">Month : {item.month}</p>
                  <p className="subtitle">Apartment No: {item.apartmentNo}</p>
                </div>
                <p className="subtitle">Email: {item.email}</p>
                <div className="flex gap-2 justify-start items-start">
                  <p className="subtitle">Floor No : {item.floorNo}</p>
                  <p className="subtitle">Block No: {item.blockName}</p>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between z-10">
                <a className="hover:opacity-90 py-3 bg-cyan-50 w-full flex justify-center" href="#">
                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    className="w-6 h-6  stroke-cyan-800"
                  >
                    <path
                      strokeWidth="8"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="none"
                      d="M18.3,65.8v4A11.9,11.9,0,0,0,30.2,81.7H69.8A11.9,11.9,0,0,0,81.7,69.8v-4M65.8,50,50,65.8m0,0L34.2,50M50,65.8V18.3"
                      className=""
                    ></path>
                  </svg>
                </a>
                <a className="hover:opacity-90 py-3 bg-cyan-50 w-full flex justify-center" href="#">
                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    className="w-6 h-6  stroke-cyan-800"
                  >
                    <path
                      strokeWidth="8"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="none"
                      d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
