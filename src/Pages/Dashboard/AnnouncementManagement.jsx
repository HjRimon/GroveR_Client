// src/components/AnnouncementManagement.js
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@material-tailwind/react";

const AnnouncementManagement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    // Fetch all announcements when component mounts
    axios
      .get("http://localhost:5000/api/announcements")
      .then((response) => setAnnouncements(response.data))
      .catch((error) => console.error("Error fetching announcements:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server to add a new announcement
    axios
      .post("http://localhost:5000/api/announcements", formData)
      .then((response) => {
        setAnnouncements([...announcements, response.data]);
        setFormData({ title: "", description: "", image: "" });

        // Show success toast
        toast.success("Announcement added successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => console.error("Error adding announcement:", error));
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-10">Announcement Management</h1>

      <div className="mb-10">
        <table className="table w-auto">
          <thead className="text-lg md:text-2xl">
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="text-lg md:text-2xl">
            {announcements.map((announcement) => (
              <tr key={announcement._id}>
                <td>{announcement.title}</td>
                <td>{announcement.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center my-5">Add Announcement</h1>
      </div>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="w-72 mb-5">
            <Input
              label="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-72 mb-5">
            <Input
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-72 mb-5">
            <Input
              label="Image Link"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary btn-outline" type="submit">
            Add an announcement
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AnnouncementManagement;
