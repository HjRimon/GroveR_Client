import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://building-management-server-beta.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
