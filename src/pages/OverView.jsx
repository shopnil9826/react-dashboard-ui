import OverviewCard from "@/components/Dashboard/OverView/OverviewCard";
import React from "react";
import { FaUsers, FaDollarSign, FaBox,   } from "react-icons/fa";
import {BadgeCent} from "lucide-react"
import ApexChart from "@/components/Dashboard/OverView/PerfomanceCharts";
import WeeklyRevenueChart from "@/components/Dashboard/OverView/WeeklyRevenueChart";
import TopProducts from "@/components/Dashboard/OverView/TopProducts";
import TopCustomers from "@/components/Dashboard/OverView/TopCustomers";

function OverView() {
  const stats = [
    { title: "Users", value: 1200, icon: FaUsers },
    { title: "Revenue", value: "$32K", icon: FaDollarSign },
    { title: "Products", value: 248, icon: FaBox },
    { title: "Earning", value: "$3442K", icon: BadgeCent },

  ];
  return (
    <div className="space-y-6 bg-purple-50 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  px-6">
        {stats.map((stat) => (
          <OverviewCard key={stat.title} {...stat} />
        ))}
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        <ApexChart/>
        <WeeklyRevenueChart/>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 px-6 items-stretch">
        <TopProducts/>
        <TopCustomers/>
      </div>
    </div>
  );
}

export default OverView;
