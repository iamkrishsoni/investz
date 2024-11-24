"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/searchbar";
import Card from "./Card/card";
import { fetchNews } from "@/api/fetchNews";
export default function GlobalNews() {
  const [newsData, setNewsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("Sentiments");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const cachedData = sessionStorage.getItem("newsData");
        if (cachedData) {
          console.log("cache")
          const parsedData = JSON.parse(cachedData);
          setNewsData(parsedData);
          setFilteredData(parsedData);
        } else {
          console.log("api call")
          const data = await fetchNews();
          sessionStorage.setItem("newsData", JSON.stringify(data)); 
          setNewsData(data);
          setFilteredData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getNewsData();
  }, []);
  useEffect(() => {
    const filtered = newsData.filter((news) => {
      const matchesFilter =
        filter === "Sentiments" || news.sentiment === filter;
      const matchesSearch = news.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
    setFilteredData(filtered);
  }, [newsData, filter, searchQuery]);

  if (loading) {
    return (
      <>
        <SearchBar setFilter={setFilter} setSearchQuery={setSearchQuery} />
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </section>
      </>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <SearchBar setFilter={setFilter} setSearchQuery={setSearchQuery} />
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((news, index) => (
          <Card
            key={index}
            source={news.url}
            title={news.title}
            description={news.summary}
            sentiment={news.sentiment}
            polarity={news.polarity_score.toFixed(2)}
            subjectivity={news.subjectivity_score.toFixed(2)}
          />
        ))}
      </section>
    </>
  );
}

// SkeletonCard component (if not defined elsewhere)
const SkeletonCard = () => (
  <div className="animate-pulse bg-gray-300 rounded-lg p-4 shadow-lg h-[25rem] w-[24rem]">
    <div className="h-6 bg-gray-400 rounded mb-4"></div>
    <div className="h-4 bg-gray-400 rounded mb-2 w-3/4"></div>
    <div className="h-3 bg-gray-400 rounded mb-2 w-1/2"></div>
    <div className="h-20 bg-gray-400 rounded mb-2"></div>
  </div>
);
