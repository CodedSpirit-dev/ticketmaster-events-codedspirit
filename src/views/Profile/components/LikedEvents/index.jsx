import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants"
import EventItem from '../../../../public components/Events/components/EventItem'


const LikedEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate(); // Corregir llamando a la función useNavigate

    useEffect(() => {
        const fetchEventsDetails = async () => {
            try {
                setIsLoading(true);
                const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];

                const results = [];
                for (const eventId of likedEvents) {
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX`);
                    const data = await response.json();

                    results.push(data);
                }

                setEvents(results);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEventsDetails();
    }, []);

    const handleEventClick = (id) => {
        navigate(`/detail/${id}`);
    };

    if (Object.keys(error).length > 0) {
        return <div>Ha ocurrido un error</div>;
    }
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            {events.map((event, index) => (
                <EventItem
                    key={`liked-event-item-${event.id}-${index}`}
                    name={event.name}
                    info={event.info}
                    image={event.images[0].url}
                    onEventClick={() => handleEventClick(event.id)} // Llamar handleEventClick con el ID del evento
                    id={event.id}
                />
            ))}
        </>
    );
};

export default LikedEvents;