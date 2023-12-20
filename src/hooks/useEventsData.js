import useEventsResults from "../state/events-results.js";

// Store para guardar valores de manera local
const useEventsData = () => {
  const { data, loading, error, fetchEvents } = useEventsResults()
  return {
    events: data?._embedded?.events || [], // Array de eventos extraído del objeto data
    page: data?.page || {}, // Objeto con la información de la página
    loading, // Flag de carga
    error, // Error if any
    fetchEvents,
  };
};

export default useEventsData;
