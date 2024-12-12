
import './ProjectDashboardCard.css';

const ProjectDashboardCard = () => {
  return (
    <div className="project-dashboard-card">
      <div className="project-dashboard-header">
        <div className="project-dashboard-title">
          <span className="status-dot"></span> Project 1
        </div>
        <div className="remaining-days">
          <span>⚠️</span> REMAINING DAYS: <span className="days">10</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-bar">
          <div className="progress-filled"></div>
        </div>
        <div className="budget">💰 BUDGET: 20K</div>
      </div>

      <div className="investment-table">
        <div className="table-header">
          <span>Name</span>
          <span>Invested</span>
          <span>Projected</span>
        </div>
        <div className="table-row">
          <span>Anushree</span>
          <span>10</span>
          <span>1000</span>
        </div>
        <div className="table-row">
          <span>Mayank</span>
          <span>9</span>
          <span>900</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboardCard;
