import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1>Welcome to Astrotak Clone</h1>
        <p>Get personalized astrology advice from expert astrologers.</p>
        <button style={styles.button}>Get Started</button>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  hero: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
