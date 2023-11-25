import { useEffect, useState } from "react";
import AppartmentRooms from "./AppartmentRooms";
import { Helmet } from "react-helmet-async";

const Appartment = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-10">
      <Helmet>
        <title>GrooveR | | Appartment</title>
      </Helmet>
      {rooms.map((item) => (
        <AppartmentRooms key={item._id} item={item}></AppartmentRooms>
      ))}
    </div>
  );
};

export default Appartment;
