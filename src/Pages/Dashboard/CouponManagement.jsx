import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@material-tailwind/react";

const CouponManagement = () => {
  const [coupons, setCoupons] = useState([]);
  const [formData, setFormData] = useState({
    code: "",
    percentage: "",
    description: "",
  });

  useEffect(() => {
    // Fetch all coupons when component mounts
    axios
      .get("http://localhost:5000/api/coupons")
      .then((response) => setCoupons(response.data))
      .catch((error) => console.error("Error fetching coupons:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server to add a new coupon
    axios
      .post("http://localhost:5000/api/coupons", formData)
      .then((response) => {
        setCoupons([...coupons, response.data]);
        setFormData({ code: "", percentage: "", description: "" });

        toast.success("Coupon added successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => console.error("Error adding coupon:", error));
  };

  return (
    <div className="w-full lg:h-[100vh] mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl w-auto md:w-[60%] mx-auto">
        <h1 className="text-3xl text-center font-bold py-10">Coupon Management</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div>
            <table className="table">
              <thead className="text-xl">
                <tr>
                  <th>Coupon</th>
                  <th>Percentage</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody className="text-2xl">
                {coupons.map((coupon) => (
                  <tr key={coupon._id}>
                    <td>{coupon.code}</td>
                    <td>{coupon.percentage}%</td>
                    <td>{coupon.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <button
              className="text-3xl text-center font-bold"
              onClick={() => console.log("Add button clicked")}
            >
              Add Coupon
            </button>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="w-72 my-5">
                  <Input
                    label="Coupon Code"
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-72 mb-5">
                  <Input
                    label="Discount Percentage"
                    type="number"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-72 mb-5">
                  <Input
                    label="Description"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-primary btn-outline" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Toast Container for Notifications */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CouponManagement;
