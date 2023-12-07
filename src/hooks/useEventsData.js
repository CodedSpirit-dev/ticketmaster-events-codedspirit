import { useState } from "react";
import eventsJson from "../data/events.json";

const useEventsData = () => {
        const [data] = useState(eventsJson);
        const {
          _embedded: { events },
        } = data;

        return {
            events 
        };
};

export default useEventsData