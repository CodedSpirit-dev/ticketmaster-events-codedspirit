import { useState, useEffect } from "react";
// import eventsJson from "../data/events.json";

/**
 * Hook personalizado que se encarga de cargar la data de eventos.
 * @returns {{events: Array<Object>, loading: boolean, error: Error}} objeto con la data de eventos, un flag de carga y un error
 */
const useEventsData = () => {
  const [data, setData] = useState({}); // Estado para la data
  const [loading, setLoading] = useState(true); // Flag de carga
  const [error, setError] = useState(); // Estado para el error

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=yH0VHJiTyNNqF2M4z9yMu5CNhKIGcJfO&countryCode=MX");
        const data = await response.json();

        setData(data);
        setLoading(false);
        
      } catch (error) {
        setError(error);
      }
    }
    fetchEvents();
  }, []);

  return {
    events: data?._embedded?.events || [], // Array de eventos extraído del objeto data
    loading, // Flag de carga
    error, // Error if any
  };
};

export default useEventsData;
