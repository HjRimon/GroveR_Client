import { Helmet } from "react-helmet-async";
import AboutBuilding from "./AboutBuilding";
import Banner from "./Banner";
import Info from "./Info";
import VisitLocation from "./VisitLocation";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GrooveR | | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutBuilding></AboutBuilding>
      <Info></Info>
      <VisitLocation></VisitLocation>
    </div>
  );
};

export default Home;
