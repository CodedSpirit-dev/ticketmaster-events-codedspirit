import { useParams } from "react-router-dom"

const Detail = () => {
    const { eventId } = useParams()
    return (
        <div>
            Detail {eventId}
        </div>
    )
}

export default Detail