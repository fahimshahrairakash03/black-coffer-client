import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-4xl my-10">This is home</h1>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <NewsCard key={n._id} n={n}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
