import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Shop from "./pages/Shop/Shop"
import Pages from "./pages/Pages/Pages"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Navbarr from "./components/Navbarr"
import ShopDetails from "./pages/Shop/ShopDtails/ShopDetails"
import Cart from "./pages/Shop/Cart/Cart"
import Checkout from "./pages/Shop/Checkout/Checkout"
import Footer from "./components/Footer/Footer"





function App() {

  return (
    <Router>
      {/* navigation bar here fixed */}
      <Navbarr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Aboutres" element={<AboutRest />} /> */}
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop-details" element={<ShopDetails />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Checkout" element={<Checkout/>} />

        <Route path="/Pages" element={<Pages />} />
      

        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
