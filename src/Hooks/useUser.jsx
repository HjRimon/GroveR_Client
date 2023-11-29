// useUser.js
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: allUsers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const filteredUsers = allUsers.filter(
    (item) => item.email === user.email && item.role === "member"
  );
  const filteredNew = allUsers.filter((item) => item.email === user.email && item.role === "user");

  return [filteredUsers, filteredNew, refetch];
};

export default useUser;
