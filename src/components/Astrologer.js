import React, { useEffect, useState } from "react";
import axios from "axios";

const Astrologer = () => {
  const [astrologers, setAstrologers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setAstrologers(response.data);
      setLoading(false); // Stop loading
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, []);

if (loading) {
    return <h2>Loading...</h2>;
  }

  const filteredAstrologers = astrologers.filter((astrologer) =>
    astrologer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Talk to Astrologer</h1>
      <input
        type="text"
        placeholder="Search Astrologer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredAstrologers.map((astrologer) => (
          <li key={astrologer.id} style={styles.card}>
            <h3>{astrologer.name}</h3>
            <p>Email: {astrologer.email}</p>
            <p>Phone: {astrologer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  input: {
    margin: "20px 0",
    padding: "10px",
    width: "50%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default Astrologer;
