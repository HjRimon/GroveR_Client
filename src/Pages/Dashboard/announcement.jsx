import axios from "axios";
import { useEffect, useState } from "react";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    // Fetch all announcements when component mounts
    axios
      .get("http://localhost:5000/api/announcements")
      .then((response) => setAnnouncements(response.data))
      .catch((error) => console.error("Error fetching announcements:", error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 w-full h-full text-white">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center py-10">
        Announcements
      </h1>
      {announcements.map((announcement) => (
        <div key={announcement._id} className="w-[98%] mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-center py-5 font-semibold text-red-400">
            {announcement.title}
          </h1>
          <p className="py-5 text-lg md:text-xl lg:text-2xl text-center">
            {announcement.description}
          </p>
          <div className="flex justify-center items-center mt-5">
            <img className="rounded-xl" src={announcement.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
