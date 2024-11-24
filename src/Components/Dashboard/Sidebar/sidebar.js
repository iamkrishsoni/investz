// Sidebar Component - Sidebar/sidebar.js

"use client";
import { Box, Layers, Store, Info } from "lucide-react";
import Image from "next/image";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-20 bg-[#102B3F] min-h-[28rem] p-4 flex flex-col gap-4 rounded-2xl h-fit mt-2">
      {[
        { icon: "/assets/icon/1.png", label: "prediction" },
        { icon: "/assets/icon/2.png", label: "news" },
        { icon: "/assets/icon/3.png", label: "portfolio" },
        { icon: "/assets/icon/4.png", label: "profile" },
      ].map((item, index) => (
        <button
          key={index}
          className={`p-3 ${
            activeTab === item.label.toLowerCase()
              ? "bg-[#EFEFEF] rounded-l-xl rounded-r-none w-[4rem]"
              : "bg-[#EFEFEF]"
          } hover:bg-opacity-50 rounded-xl transition-colors`}
          onClick={() => setActiveTab(item.label.toLowerCase())}
        >
          <img src={item.icon} alt="" className="w-6 h-6" />
        </button>
      ))}
    </aside>
  );
}
