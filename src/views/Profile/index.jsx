import { Outlet, useLocation } from "react-router-dom"

import styles  from "./Profile.module.css"

const Profile = () => {
    const { pathname } = useLocation()

    return (
        <div>
            <div>
                <span className={`${pathname.includes("my-info") ? styles.active : ""}`}>Mi informacion</span>
                <span className={`${pathname.includes("like-events") ? styles.active : ""}`}>Eventos favoritos</span>
            </div>
            <Outlet />
        </div>
    )
}

export default Profile