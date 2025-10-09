import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Hero from "./components/sections/Hero/Hero";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [showHero, setShowHero] = useState(true);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const handleClear = () => {
    setWishlist([]);
  };

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
        <Navbar wishlist={wishlist} />
        <main>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Home wishlist={wishlist} toggleWishlist={toggleWishlist} />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductPage
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  handleClear={handleClear}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
