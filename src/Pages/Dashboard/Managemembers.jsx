import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const Managemembers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      const members = res.data.filter((user) => user.role === "member");
      return members;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 w-[100%] h-[100vh] text-white">
      <h1 className="text-4xl text-center font-bold py-10">Manage Members</h1>
      <div className="w-[80%] mx-auto">
        <table className="table -ml-12 md:-ml-8 lg:ml-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Delete</th>
            </tr>
          </thead>
        <tbody className="text-3xl">
            {users.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-gost btn-xl">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managemembers;
