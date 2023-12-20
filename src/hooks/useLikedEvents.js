import { useState } from 'react'
const useLikedEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState(false)

    return {
        isEventLiked,
        setIsEventLiked
    }
}

export default useLikedEvents