import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home"; 
import Art from "./pages/Art"; 
import Music from "./pages/Music"; 

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/music" element={<Music />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
