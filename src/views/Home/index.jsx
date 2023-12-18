import { useState, useRef, useEffect } from "react";
import Navbar from "../../public components/Navbar";
import Events from "../../public components/Events";
import useEventsData from "../../hooks/useEventsData";

const Home = () => {
  const { events, loading, error, fetchEvents } = useEventsData(); // Obtiene data de eventos, loading y error

  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const containerRef = useRef(); // Referencia al contenedor del Navbar

  useEffect(() => {
    fetchEvents();
  }, []);

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
      {loading ? <p>Cargando...</p> : <Events searchTerm={searchTerm} events={events} loading={loading} error={error} />}
      {!!error && <p>Ha ocurrido un error.</p>}
      
    </>
  );
}
export default Home