import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";

const Events = ({ searchTerm }) => {
  const { events } = useEventsData();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEventClick = (id) => {
    console.log("evento clickeado", id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm && searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (eventsFiltered.length === 0) {
      return <p>No se encontraron eventos.</p>;
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventClick}
        id={eventItem.id}
        evt={""}
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

export default Events;
