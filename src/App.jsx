import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Blogs from "./components/Blogs/blogs";
import Footer from "./components/Footer/Footer";
import Navbarr from "./components/Navbarr";
import About from "./pages/About/About";
import AboutRest from "./pages/AboutRestaurant/AboutRest";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import Cart from "./pages/Shop/Cart/Cart";
import Checkout from "./pages/Shop/Checkout/Checkout";
import Shop from "./pages/Shop/Shop";
import ShopDetails from "./pages/Shop/ShopDtails/ShopDetails";

function App() {
  return (
    <Router>
      {/* navigation bar here fixed */}
      <Navbarr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Aboutres" element={<AboutRest />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop-details" element={<ShopDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blogdetail" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
