import React from "react";
import styles from './Events.module.css'

const Events = () => {
    return (
        <div className={styles.main}>
            <div className='container'>
                <div className={styles.search}>OUR EVENTS</div>
                <div className={styles.month}>MONTH</div>
                <h3 className={styles.title}>DANCING IN THE STREET</h3>
                <a href="#" className={styles.link}>GO</a>
                <p className={styles.date}>10/12/2022</p>
            </div>
        </div>
    )
}

export default Events;