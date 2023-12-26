import { useState } from 'react'


const LIKED_EVENTS_STORAGE_KEY = 'likedEvents';
const checkIsEventLiked = (likedEvents, eventId) => {
    const storedLikedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || '[]');
    return storedLikedEvents.includes(eventId);
}
const useLikedEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState(false)

    const toggleEventlike = () => {
        const likedEvents = localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || '[]';
        const eventIndex = likedEvents.indexOf(eventId);

        if (eventIndex !== -1) {
            likedEvents.splice(eventIndex, 1)
            setIsEventLiked(false)
        }
        else {
            likedEvents.push(eventId)
            setIsEventLiked(true)
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    }

    return {
        isEventLiked,
        toggleEventlike
    }
}

export default useLikedEvents;