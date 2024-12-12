import SideBar from "../../../SideBar";
import BarGraph from "../../../components/charts/BarGraph";
import PieChart from "../../../components/charts/PieChart";
import AddEntry from "../../../components/buttons/AddEntry";
import Notification from "../../../components/buttons/Notification";
import Account from "../../../components/buttons/Account";
import ProjectCard from "../../../components/cards/ProjectCard";
import ProjectDashboardCard from "../../../components/cards/ProjectDashboardCard";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <BarGraph />
      <PieChart />
      <AddEntry />
      <Notification />
      <Account />
      <ProjectCard />
      <div
    style={{
      width: "fit-content",
      height: "fit-content",
      minHeight: "240px",
      padding: "10px",
      gap: "10px",
      background: "#fef8f4", // Alternate property for background color
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
    }}
  >
      <ProjectDashboardCard />
    </div></div>
  );
};

export default Home;
