"use client";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ setFilter, setSearchQuery }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Sentiments");

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setFilter(filter); // Update filter in GlobalNews
    setIsFilterOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex gap-4 mb-8 w-fit items-end">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Which stock is trending in ...."
          className="pl-4 pr-12 py-3 w-[25rem] bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
          onChange={handleSearchChange}
        />
        <button className="h-full px-1 bg-[#454545] rounded-lg ml-[-3.5rem]">
          <img src="/assets/icon/search.png" alt="" className="w-12 h-12" />
        </button>
      </div>
      <div className="relative">
        <button
          onClick={toggleFilter}
          className="px-3 h-fit py-2 bg-[#282828] text-white rounded-lg flex items-center gap-2"
        >
          <Filter className="w-5 h-5" />
          <span>{selectedFilter}</span>
        </button>
        {isFilterOpen && (
          <div className="absolute mt-2 w-40 bg-gray-800 text-white shadow-lg rounded-lg z-10">
            <ul>
              {["Positive", "Negative", "Neutral"].map((option) => (
                <li
                  key={option}
                  onClick={() => selectFilter(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
