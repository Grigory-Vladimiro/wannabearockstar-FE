import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((res) => {
        console.log("News fetched:", res.data); // logging
        setNewsList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setNewsList([]);
      });
  }, []);

  return (
    <section className="news_section">
      <div className="container">
        <h2 className="section_title">Latest News</h2>
        {newsList.length === 0 ? (
          <p>No news yet.</p>
        ) : (
          <ul className="news_list">
            {newsList.map((n) => (
              <li key={n.id} className="news_item">
                <strong>{n.date || "No date"}</strong>: {n.text || "No text"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
