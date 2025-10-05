// src/About.js
import React, { useEffect, useState } from "react";

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
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <img
        src={data.photoUrl}
        alt="Profile"
        style={{ maxWidth: "400px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default About;
