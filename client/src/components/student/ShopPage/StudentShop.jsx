import React from "react";
import styles from "./StudentShop.module.css"
import { Link } from "react-router-dom";

const StudentShop = () => {
    return (
        <div className={styles.main}>
            <div className='container'>
                <h1 className={styles.title}>SHOP</h1>
                <div className={styles.wrapper}>
                    <div className={styles.shopCategory}>
                        <h3>SHOES</h3>
                        <Link className={styles.linkCategory}>CHECK IN</Link>
                    </div>
                    <div className={styles.shopCategory}>
                        <h3>MASTER CLASSES</h3>
                        <Link className={styles.linkCategory}>CHECK IN</Link>
                    </div>
                    <div className={styles.shopCategory}>
                        <h3>ONLINE LESSONS</h3>
                        <Link className={styles.linkCategory}>CHECK IN</Link>
                    </div>
                    <div className={styles.shopCategory}>
                        <h3>FOR FREEDOM</h3>
                        <Link className={styles.linkCategory}>CHECK IN</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentShop;