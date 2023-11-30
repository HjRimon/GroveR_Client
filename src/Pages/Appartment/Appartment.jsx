import { useEffect, useState } from "react";
import AppartmentRooms from "./AppartmentRooms";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const Appartment = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://building-management-server-beta.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-10">
        <Helmet>
          <title>GrooveR | | Appartment</title>
        </Helmet>
        {rooms.map((item) => (
          <AppartmentRooms key={item._id} item={item}></AppartmentRooms>
        ))}
      </div>
    </>
  );
};

export default Appartment;
