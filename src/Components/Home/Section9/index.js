import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Section9() {
  return (
    <div className="flex w-full h-screen overflow-hidden items-center justify-center">
      <div
        className="flex flex-col justify-center sm:h-[70%] sm:w-[65%] w-[90%] h-[50%] px-4 sm:px-6 lg:px-20 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/bg_map.png')",
        }}
      >
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl sm:w-full w-[50%]">
            Unlock Elite Investment Potential with InvestZ
          </h1>
          <div className="mt-10">
            <button className="group inline-flex items-center bg-white text-black sm:px-8 sm:py-4 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="mr-2 sm:text-lg font-medium">Getting Started</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
