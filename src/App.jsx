import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AvesDisponiveis from "./Components/AvesDisponiveis";
import ControloAvifauna from "./Pages/ControloAvifauna";
import Navbar from "./Components/NavBar";
import Eventos from "./Pages/Eventos";
import AdminPage from "./Pages/AdminPage";
import Contactos from "./Pages/Contactos";
import AluguerInstalacoes from "./Pages/AluguerInstalacoes";
import Galeria from "./Pages/Galeria";
import MaterialFalcoaria from "./Pages/MaterialFalcoaria";
import SobreNos from "./Pages/SobreNos";
import AvesRapina from "./Pages/AvesRapina";

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_API,
  cache: new InMemoryCache(),
});

const adjustBackgroundHeight = () => {
  const background = document.querySelector(".bg-color");
  background.style.height = `${document.body.scrollHeight}px`;
};

window.addEventListener("resize", adjustBackgroundHeight);
window.addEventListener("load", adjustBackgroundHeight);
window.addEventListener("scroll", adjustBackgroundHeight);

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <div className="bg-color"></div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/available" element={<AvesDisponiveis />} />
            <Route path="/controloavifauna" element={<ControloAvifauna />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/aluguer" element={<AluguerInstalacoes />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/material" element={<MaterialFalcoaria />} />
            <Route path="/about" element={<SobreNos />} />
            <Route path="/avesrapina" element={<AvesRapina />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
