import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Shop from "./pages/Shop/Shop"
import Pages from "./pages/Pages/Pages"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Navbarr from "./components/Navbarr"

function App() {

  return (
    <Router>
      {/* navigation bar here fixed */}
      <Navbarr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
