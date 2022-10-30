import React from "react";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className='container'>
                <div class={styles.heroBlock}>
                    <div class={styles.heroText}>
                        <h1>Hip-Hop<br/> in Russia</h1>
                        <p>Свобода самовыражения</p>    
                    </div>
                    <div class={styles.heroImage}></div>
                </div>
            </div>
        </div>
    )
}

export default Main;