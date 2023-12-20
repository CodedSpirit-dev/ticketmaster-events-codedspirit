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
                <h2 className={styles.container__mainInfo__title}>{eventData.name}</h2>
                <img className={styles.container__mainInfo__image} src={eventData.images?.[1].url} alt={eventData.name} />
                <p className={styles.container__mainInfo__date}>{format(new Date(eventData.dates.start.localDate), 'dd/MM/yyyy')} a las {eventData.dates.start.localTime} horas</p>
                <p className={styles.container__mainInfo__description}>{eventData.info}</p>
            </div>
            <div className={styles.container__additionalInfo}>
                { eventData.seatmap && <img className={styles.container__additionalInfo__seatmap} src={eventData.seatmap.staticUrl} alt={eventData.name} /> }
                <p className={styles.container__additionalInfo__title}>Información adicional</p>
                <p className={styles.container__additionalInfo__description}> Rango de precios: ${eventData.priceRanges[0].min} {eventData.priceRanges[0].currency} hasta ${eventData.priceRanges[0].max} {eventData.priceRanges[0].currency}</p>
                <p className={styles.container__additionalInfo__description}>Calle: {eventData._embedded.venues[0].address.line1}</p>
                <p className={styles.container__additionalInfo__description}>Ciudad: {eventData._embedded.venues[0].city.name}</p>
                <p className={styles.container__additionalInfo__description}>Pais: {eventData._embedded.venues[0].country.name}</p>
            </div>
        </div>
    )
}

export default Detail