import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { format } from "date-fns"

import Error404 from "../Error 404"

import styles from './Detail.module.css'

const Detail = () => {
    const { eventId } = useParams()
    const [eventData, setEventData] = useState({})
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=yH0VHJiTyNNqF2M4z9yMu5CNhKIGcJfO`)
                const data = await response.json()

                setEventData(data)
                setLoading(false)
            } catch (error) {
                setEventData({})
                setError(error)
                setLoading(false)
            }
        }
        fetchEventData()
    }, [])

    if (loading && Object.keys(eventData).length === 0) {
        return <div>Cargando...</div>
    }
    if (Object.keys(error).length > 0) {
        return  <Error404 />
    }

    console.log(eventData)
    return (
        <div className={styles.container}>
            <div className={styles.container__mainInfo}>
                <img src={eventData.images?.[1].url} alt={eventData.name} />
                <h2>{eventData.name}</h2>
                <p>{format(new Date(eventData.dates.start.localDate), 'dd/MM/yyyy')} a las {eventData.dates.start.localTime} horas</p>
                <p>{eventData.info}</p>
            </div>
        </div>
    )
}

export default Detail