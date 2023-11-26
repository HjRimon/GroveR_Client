import { Helmet } from "react-helmet-async";
import AboutBuilding from "./AboutBuilding";
import Banner from "./Banner";
import Info from "./Info";
import VisitLocation from "./VisitLocation";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const registrationSuccess = localStorage.getItem("registrationSuccess");
    if (registrationSuccess === "true") {
      toast.success("Registration successful!");
      localStorage.removeItem("registrationSuccess");
    }
  }, []);
  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess === "true") {
      toast.success("Login successful!");
      localStorage.removeItem("loginSuccess");
    }
  }, []);
  return (
    <div>
      <Helmet>
        <title>GrooveR | | Home</title>
      </Helmet>
      <ToastContainer position="top-right" autoClose={3000} />
      <Banner></Banner>
      <AboutBuilding></AboutBuilding>
      <Info></Info>
      <VisitLocation></VisitLocation>
    </div>
  );
};

export default Home;
