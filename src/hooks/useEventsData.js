import { useState, useEffect } from "react";
import eventsJson from "../data/events.json";

/**
 * Hook personalizado que se encarga de cargar la data de eventos.
 * @returns {{events: Array<Object>, loading: boolean, error: Error}} objeto con la data de eventos, un flag de carga y un error
 */
const useEventsData = () => {
  const [data, setData] = useState({}); // Estado para la data
  const [loading, setLoading] = useState(true); // Flag de carga
  const [error, setError] = useState(); // Estado para el error

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(eventsJson); // Carga la data de eventos.json
        setLoading(false); // Finaliza la carga
      } catch (error) {
        setError(error); // En caso de error, lo almacena
      }
    }, 3000); // Retraso simulado de 3 segundos
  }, []);

  return {
    events: data?._embedded?.events || [], // Array de eventos extraído del objeto data
    loading, // Flag de carga
    error, // Error if any
  };
};

export default useEventsData;
