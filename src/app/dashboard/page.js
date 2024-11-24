"use client";
import { useState } from "react";
import Header from "../../Components/Dashboard/Header/header";
import Sidebar from "../../Components/Dashboard/Sidebar/sidebar";
// import Prediction from "../../Components/Dashboard/Prediction/Prediction";
import Portfolio from "../../Components/Dashboard/Portfolio";
import Profile from "../../Components/Dashboard/Profile";
import GlobalNews from "../../Components/Dashboard/GlobalNews";
import useAuth from "@/hooks/useAuth";

export default function dashboard() {
  useAuth();
  const [activeTab, setActiveTab] = useState("news");

  const renderContent = () => {
    switch (activeTab) {
      case "news":
        return <GlobalNews />;
      case "prediction":
      // return <Prediction />;
      case "portfolio":
        return <Portfolio />;
      case "profile":
        return <Profile />;
      default:
        return <div>Content for {activeTab}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-12">
      <Header />
      <div className="flex pl-4 h-screen overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex p-0 overflow-hidden">
          <div className="max-w-7xl mx-auto h-full overflow-y-auto p-6 pb-[9rem]">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
