import { useRouteError } from "react-router-dom"

import styles from "./Error404.module.css"

const Error404 = () => {

    const error = useRouteError()

    return (
        <div className={styles.container}>
            <h3 className={styles.container__title}>Error en la dirección</h3>
            <p className={styles.container__description}>Pagina no encontrada</p>
            <p className={styles.container__description__router}> Tipo de error: {error.statusText || error.message} <br/>{error.data || error.message}</p>
        </div>
    )
}

export default Error404