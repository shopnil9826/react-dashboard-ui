import React from "react";

const OverviewCard = ({
  icon: Icon,
  title,
  value,
  iconBg = "bg-purple-100",
  iconColor = "text-purple-600",
}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all">
      <div className={`p-3 rounded-full ${iconBg} ${iconColor} flex items-center justify-center`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="ml-4">
        <p className="text-sm text-purple-500">{title}</p>
        <p className="text-xl font-bold text-purple-800">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
