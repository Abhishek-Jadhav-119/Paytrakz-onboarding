import { useNavigate } from "react-router-dom";
import LogoWithBackgorund from "./assets/images/LogoWithBackgorund.jpg";
import HomeIcon from "./assets/icons/homeWhite.png";
import TransactionsIcon from "./assets/icons/transactions.png";
import ApprovalIcon from "./assets/icons/approval.png";
import StatsIcon from "./assets/icons/stats.png";
import SettingsIcon from "./assets/icons/settings.png";
import "./SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <img src={LogoWithBackgorund} alt="Logo" className="logo" />

      <div className="menu-item" onClick={() => navigate("/home")}>
        <img src={HomeIcon} alt="Home" />
        <h3>Home</h3>
      </div>

      <div className="menu-item" onClick={() => navigate("/transactions")}>
        <img src={TransactionsIcon} alt="Transactions" />
        <h3>Transactions</h3>
      </div>

      <div className="menu-item" onClick={() => navigate("/approvals")}>
        <img src={ApprovalIcon} alt="Approvals" />
        <h3>Approvals</h3>
      </div>

      <div className="menu-item" onClick={() => navigate("/stats")}>
        <img src={StatsIcon} alt="Stats" />
        <h3>Stats</h3>
      </div>

      <div className="menu-item" onClick={() => navigate("/settings")}>
        <img src={SettingsIcon} alt="Settings" />
        <h3>Settings</h3>
      </div>
    </div>
  );
};

export default SideBar;
