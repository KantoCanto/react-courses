
import styles from "./Sidebar.module.css"

import { PencilLine} from "phosphor-react"

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/74272648?v=4"  />
                <strong>User Name</strong>
                <span>Profession/Hobby</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Edit Profile</a>
            </footer>
        </aside>
    )
}