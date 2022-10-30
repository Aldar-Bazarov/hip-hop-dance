import React from "react";
import { BiCoinStack } from 'react-icons/bi'
import styles from "./StudentProfile.module.css"

const StudentProfile = () => {
    return (
        <div className='main'>
            <div className='container'>
                <h3 className={styles.title}>Мой профиль</h3>
                <div className={styles.wrapper}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileImage}></div>
                        {/* <img src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" /> */}
                        <p>Никита Кудряшов</p>
                        <p>Студия: Pulse</p>
                        <div className={styles.coins}>
                            <p>30 коинов</p>
                            <BiCoinStack />
                        </div>
                    </div>
                    <div className={styles.additionalInfo}>
                        <p>Рейтинг: 7/20</p>
                        <p>Достижения: 9/10</p>
                        <p>Прогресс занятий: 32</p>
                        <p>Пропусков: 6</p>
                        <a href="https://forms.gle/V7CTsyHhdwChHdUSA" target="_blank">Пройти опрос</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile;