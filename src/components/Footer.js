import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Astrotak Clone. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "15px 10px",
    marginTop: "30px",
  },
};

export default Footer;
