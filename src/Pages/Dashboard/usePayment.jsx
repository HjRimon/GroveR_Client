import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const usePayment = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { refetch, data: allUsers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/payments");
      return res.data;
    },
  });

  const filteredUsers = allUsers.filter((item) => item.email === user.email);

  return [filteredUsers, refetch];
};

export default usePayment;
