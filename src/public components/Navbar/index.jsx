import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

/**
 * Componente Navbar que permite la búsqueda de eventos.
 * @param {function} onSearch Función que se llama cuando se realiza una búsqueda.
 */
const Navbar = forwardRef(({onSearch}, ref) => {
  const [search, setSearch] = useState(""); // Estado para la búsqueda

  useEffect(() => {
    // Efecto que se ejecuta cuando cambia la búsqueda o la función onSearch
  }, [search, onSearch]);

  useImperativeHandle(ref, () => ({
      search,
      setSearch
  }))

  /**
   * Maneja el cambio del valor del input de la búsqueda.
   * @param {Event} evt Evento del input
   */
  const handleInputChange = (evt) => {
    setSearch(evt.target.value); // Actualiza el estado con el nuevo valor del input
  };

  /**
   * Maneja la pulsación del Enter en el input de la búsqueda.
   * @param {KeyboardEvent} evt Evento del teclado
   */
  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") { // Si se pulsa Enter
      onSearch(search); // Llama a la función onSearch con el valor actual de la búsqueda
    }
  };

  return (
    <div ref={ref} className="navbar">
      <div>
        <h1 className="navbar-title">Busqueda de eventos</h1>
      </div>
      <div className="navbar-search">
      <input type="text" placeholder="Buscar eventos"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
        className="navbar-search-input"
        />
        <Link to="/profile/my-info" style={{
          marginLeft: 10,
          color: "#213547",
          textDecoration: "none",
        }}>Mi perfil</Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
