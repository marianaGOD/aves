import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AvesDisponiveis from "./Pages/AvesDisponiveis";
import ControloAvifauna from "./Pages/ControloAvifauna";
import Navbar from "./Components/NavBar";
import Eventos from "./Pages/Eventos";
import AdminPage from "./Pages/AdminPage";

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_API,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/available" element={<AvesDisponiveis />} />
            <Route path="/controloavifauna" element={<ControloAvifauna />} />
            <Route path="/eventos" element={<Eventos />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
