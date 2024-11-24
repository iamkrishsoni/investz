"use client";
import Link from "next/link";
import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex px-4 w-full items-center justify-between gap-x-20 py-4">
      <div className="flex items-center gap-8">
        <Link href="/Dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
          <span className="text-4xl font-bold text-black">Investz</span>
        </Link>
      </div>
      <div className="gap-4 bg-[#102B3F] text-white px-8 py-3 w-full flex items-center justify-between rounded-2xl">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-300">
            Next.js Admin Dashboard solution
          </p>
        </div>
        <div>
          <button className="w-14 p-2 rounded-lg transform hover:scale-125 transition duration-200 ease-in-out">
            <img src="/assets/icon/notification.png" />
          </button>
          <button className="w-16 p-2 rounded-lg transform hover:scale-125 transition duration-200 ease-in-out">
            <img src="/assets/icon/profile.png" />
          </button>
        </div>
      </div>
    </header>
  );
}
