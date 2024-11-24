"use client";
import { ArrowUpRight } from "lucide-react";

export default function Card({
  source,
  title,
  date,
  description,
  sentiment,
  polarity,
  subjectivity,
}) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-xl h-fit ${
        sentiment === "Positive"
          ? "border-[#026953] border-[1px]"
          : sentiment === "Negative"
          ? "border-[#720606] border-[1px]"
          : sentiment === "Neutral"
          ? "border-[#F08000] border-[1px]"
          : "border-purple-500 border-[1px]"
      }`}
    >
      <div className="py-6">
        <div className="flex gap-2 mb-4 px-6">
          {/* <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
            {source}
          </span> */}
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              sentiment === "Positive"
                ? "bg-[#026953] text-white"
                : sentiment === "Negative"
                ? "bg-[#720606] text-white"
                : sentiment === "Neutral"
                ? "bg-[#F08000] text-white"
                : "bg-purple-500 text-white"
            }`}
          >
            {sentiment}
          </span>
        </div>
        <h2 className="text-xl font-medium mb-2 text-black px-6">{title}</h2>
        <p className="text-xs text-gray-600 mb-4 px-6">{date}</p>
        <p className="text-gray-700 mb-6 px-6 text-sm">{description}</p>
        <div className="bg-[#102B3F] py-4 text-white mb-4 px-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Polarity</p>
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeOpacity="0.2"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="cyan"
                    strokeWidth="4"
                    strokeDasharray={`${polarity * 125.6} 125.6`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm">
                  {polarity}
                </span>
              </div>
            </div>
            <div>
              <p className="mb-2">Subjectivity</p>
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeOpacity="0.2"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="lime"
                    strokeWidth="4"
                    strokeDasharray={`${subjectivity * 125.6} 125.6`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm">
                  {subjectivity}
                </span>
              </div>
            </div>
          </div>
        </div>
        <a href={source} rel="noopener noreferrer">
        <button className="w-fit p-3 mx-6 bg-gray-700 text-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
          <ArrowUpRight className="w-6 h-6" />
        </button>
        </a>
      </div>
    </div>
  );
}
