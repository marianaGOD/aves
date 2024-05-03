import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AvesDisponiveis from "./Pages/AvesDisponiveis";
import ControloAvifauna from "./Pages/ControloAvifauna";
import Navbar from "./Components/NavBar";
import Eventos from "./Pages/Eventos";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/available" element={<AvesDisponiveis />} />
          <Route path="/controloavifauna" element={<ControloAvifauna />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
