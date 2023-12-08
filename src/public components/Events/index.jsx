import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";

/**
 * Componente que muestra la lista de eventos.
 * @param {string} searchTerm Término de búsqueda para filtrar eventos
 */
const Events = ({ searchTerm }) => {
  const { events, loading, error } = useEventsData(); // Obtiene data de eventos, loading y error

  /**
   * Maneja el click en un evento.
   * @param {string} id Id del evento clickeado
   */
  const handleEventClick = (id) => {
    console.log("evento clickeado", id); // Imprime el id del evento clickeado
  };

  /**
   * Renderiza la lista de eventos.
   * @returns {JSX.Element} JSX con la lista de eventos
   */
  const renderEvents = () => {
    let eventsFiltered = events; // Copia del array de eventos

    if (searchTerm && searchTerm.length > 0) { // Si hay término de búsqueda
      eventsFiltered = eventsFiltered.filter((item) => // Filtra eventos por nombre
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (eventsFiltered.length === 0) { // Si no hay eventos
      return <p>No se encontraron eventos.</p>;
    }

    // Renderiza cada evento
    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventClick}
        id={eventItem.id}
        evt={""} // Valor de evt no especificado
      />
    ));
  };

  if (error) { // En caso de error
    return <p>Ha ocurrido un error.</p>;
  }
  if (loading) { // Mientras carga
    return <p>Cargando...</p>;
  }

  return (
    <div>
      Eventos
      {renderEvents()} // Renderiza la lista de eventos
    </div>
  );
};

export default Events;
