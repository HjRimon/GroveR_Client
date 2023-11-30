import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { TiTickOutline } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Agreementrequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const [itemStatus, setItemStatus] = useState({});

  useEffect(() => {
    const storedItemStatus = JSON.parse(localStorage.getItem("itemStatus")) || {};
    setItemStatus(storedItemStatus);
  }, []);

  const handleMakeAccept = (user, role) => {
    if (itemStatus[user._id]?.accepted) {
      return;
    }

    axiosSecure.patch(`/users/admin/${user._id}`, { role }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Role updated successfully");

        const updatedStatus = {
          ...itemStatus,
          [user._id]: { accepted: true, rejected: false },
        };

        setItemStatus(updatedStatus);
        localStorage.setItem("itemStatus", JSON.stringify(updatedStatus));
      } else {
        toast.error("Failed to update role");
      }
    });
  };

  const handleReject = (user, role) => {
    if (itemStatus[user._id]?.rejected) {
      return;
    }

    axiosSecure.patch(`/users/admin/${user._id}`, { role }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.error("Role updated successfully");

        const updatedStatus = {
          ...itemStatus,
          [user._id]: { accepted: false, rejected: true },
        };

        setItemStatus(updatedStatus);
        localStorage.setItem("itemStatus", JSON.stringify(updatedStatus));
      } else {
        toast.error("Failed to update role");
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 w-[100%] h-[100vh] text-white">
      <Helmet>
        <title>GrooveR || Agreement_Request</title>
      </Helmet>
      <div>
        <ToastContainer position="top-right" autoClose={3000}></ToastContainer>
        <div>
          <div>
            <h1 className="md:text-4xl text-xl font-bold text-center py-20">Agreement Request</h1>
            <div>
              <table className="table">
                <thead className="text-white">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Floor No</th>
                    <th>Block No</th>
                    <th>Room No</th>
                    <th>Request Date</th>
                    <th>Rent</th>
                    <th>Accept</th>
                    <th>Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, i) => (
                    <tr key={item._id}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.floor_no}</td>
                      <td>{item.block_name}</td>
                      <td>{item.apartment_no}</td>
                      <td>{item.currentDate}</td>
                      <td>{item.rent} $</td>
                      <td>
                        {item.role === "admin" ? (
                          <span style={{ color: "blue" }}></span>
                        ) : (
                          <button
                            onClick={() => handleMakeAccept(item, "member")}
                            className="btn btn-gost btn-xl"
                            style={{
                              color: itemStatus[item._id]?.accepted === true ? "green" : "black",
                            }}
                            disabled={itemStatus[item._id]?.accepted}
                          >
                            <TiTickOutline />{" "}
                            {itemStatus[item._id]?.accepted ? "Accepted" : "Accept"}
                          </button>
                        )}
                      </td>
                      <td>
                        {item.role === "admin" ? (
                          <span style={{ color: "white", fontSize: "26px", fontWeight: "bold" }}>
                            Admin
                          </span>
                        ) : (
                          <button
                            onClick={() => handleReject(item, "user")}
                            className="btn btn-gost btn-xl"
                            style={{
                              color: itemStatus[item._id]?.rejected === true ? "red" : "black",
                            }}
                            disabled={itemStatus[item._id]?.rejected}
                          >
                            <ImCross /> {itemStatus[item._id]?.rejected ? "Rejected" : "Reject"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreementrequest;
