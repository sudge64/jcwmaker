import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";
import background from "./assets/background.jpeg";

function App() {
  const location = useLocation();

  const isNotHome = location.pathname !== "/";

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
    <div
      className={`app-background ${isNotHome ? "grayscale-background" : ""}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100%',
        width: '100%',
        zIndex: 0
      }}
    />
        <div className="App" style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </div>
  );
}

export default App;
