import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>Astrotak Clone</h1>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/astrologer" style={styles.navLink}>Talk to Astrologer</Link>
        <Link to="/contact" style={styles.navLink}>Contact Us</Link>


      </nav>
    </header>
  );
};


const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Header;
