import React from "react";
import styles from './ItemNews.module.css'

const ItemNews = (props) => {
    return (
        <div className={styles.cart}>
            <div className={styles.cartText}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <img src={props.img} alt="newsImage" />
        </div>
    )
}

export default ItemNews;