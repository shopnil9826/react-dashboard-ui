import React from "react";
import DashboardMaterials from "../components/Dashboard/DashboardMaterials";

function DashboardHome() {
  return (
    <div>
      <div className="dashboard-content">
        <h2 className="text-2xl font-bold text-purple-900
         pb-2 border-b border-purple-100 relative flex-1 m-6">
          Your Materials
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-purple-500 rounded-full"></span>
        </h2>
        <DashboardMaterials />
      </div>
    </div>
  );
}

export default DashboardHome;
