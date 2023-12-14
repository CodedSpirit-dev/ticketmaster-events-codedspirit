import { useState, useRef } from "react";
import Navbar from "../../public components/Navbar";
import Events from "../../public components/Events";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const containerRef = useRef(); // Referencia al contenedor del Navbar

  /**
   * Maneja la búsqueda desde el componente Navbar.
   * @param {string} term Término de búsqueda
   */
  const handleNavbarSearch = (term) => {
    console.log(containerRef.current); // Imprime la referencia al contenedor del Navbar
    setSearchTerm(term); // Actualiza el estado con el término de búsqueda
  };

  return (
    <>
        <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
        <Events searchTerm={searchTerm} />
    </>
  );
}
export default Home