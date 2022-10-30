import React from "react";
import styles from "./StudentContacts.module.css"

const StudentContacts = () => {
    return (
        <div className={styles.main}>
            <div className='container'>
                <h3 className={styles.title}>Контакты</h3>
                <div className={styles.wrapper}>
                    <div className={styles.textInfo}>
                        <p>Адрес: г.Тюмень, ул.Комсомольская, д.7</p>
                        <p>Контакты тренеров:</p>
                        <ul>
                            <li>Соколов Андрей Сергеевич: + 7 (900) 999-00-00</li>
                            <li>Попова Александра Васильевна: + 7 (900) 999-00-00</li>
                        </ul>
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae567a140221f35614651cb1d3ddd7f923a6a17b36719d46c91ac791ee380b7c&amp;source=constructor" width="600" height="400" frameborder="0">аывавы</iframe>
                </div>
            </div>
        </div>
    )
}

export default StudentContacts;