import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./public components/Navbar";
import Events from "./public components/Events";
import SignupForm from "./public components/SignupForm";

/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} JSX de la aplicación
 */
function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  /**
   * Maneja la búsqueda desde el componente Navbar.
   * @param {string} term Término de búsqueda
   */
  const handleNavbarSearch = (term) => {
    setSearchTerm(term); // Actualiza el estado con el término de búsqueda
  };

  return (
    <>
      {/* Renderiza el Navbar con la función handleNavbarSearch como prop */}
      <Navbar onSearch={handleNavbarSearch} />
      {/* Renderiza el componente Events con el término de búsqueda */}
      <Events searchTerm={searchTerm} />
      {/* Renderiza el componente SignupForm */}
      <SignupForm />
    </>
  );
}

export default App;
