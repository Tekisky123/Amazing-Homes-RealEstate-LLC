import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FloatingIcons from "./Components/FloatingIcons";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Navbar />
      <FloatingIcons />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
