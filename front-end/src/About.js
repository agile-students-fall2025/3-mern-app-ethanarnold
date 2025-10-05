// src/About.js
import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching /about:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="about-section">
      <h1 className="about-name">{data.name}</h1>
      <p className="about-bio">{data.bio}</p>
      <img className="about-photo" src={data.photoUrl} alt="Profile" />
    </div>
  );
}

export default About;
