import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Astrologer from "./components/Astrologer";
import Contact from "./components/Contact";




const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/astrologer" element={<Astrologer />} />
            <Route path="/contact" element={<Contact />} />



          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  main: {
    minHeight: "calc(100vh - 150px)",
    backgroundColor: "#f8f8f8",
    padding: "20px",
  },
};

export default App;
