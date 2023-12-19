import { useState } from "react";

const useEventsData = () => {
  const [data, setData] = useState({}); // Estado para la data
  const [loading, setLoading] = useState(true); // Flag de carga
  const [error, setError] = useState(); // Estado para el error

const fetchEvents = async (params) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=yH0VHJiTyNNqF2M4z9yMu5CNhKIGcJfO&countryCode=MX${
        params?.length ? params : ""
      }`
    );
    const data = await response.json();

    setData(data);
    setLoading(false);

  } catch (error) {
    setError(error);
  }
}

  return {
    events: data?._embedded?.events || [], // Array de eventos extraído del objeto data
    page: data?.page || {}, // Objeto con la información de la página
    loading, // Flag de carga
    error, // Error if any
    fetchEvents,
  };
};

export default useEventsData;
