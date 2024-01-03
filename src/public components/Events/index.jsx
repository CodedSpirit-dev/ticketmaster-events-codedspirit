import { useNavigate } from "react-router-dom";
import EventItem from "./components/EventItem";
import { memo } from "react";

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events; 

    if (searchTerm && searchTerm.length > 0) { 
      eventsFiltered = eventsFiltered.filter((item) => 
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

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default memo(Events);
