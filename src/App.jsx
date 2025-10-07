import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Hero from "./components/sections/Hero/Hero";

const App = () => {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showHero ? "hidden" : "auto";
  }, [showHero]);

  useEffect(() => {
    const entered = sessionStorage.getItem("hasEntered");
    if (entered) setShowHero(false);
  }, []);

  const handleEnter = () => {
    setShowHero(false);
    sessionStorage.setItem("hasEntered", "true");
  };

  return (
    <Router>
      {showHero && <Hero onEnter={handleEnter} />}
      <div className="min-h-screen bg-gray-50 relative z-0">
        <Navbar />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
