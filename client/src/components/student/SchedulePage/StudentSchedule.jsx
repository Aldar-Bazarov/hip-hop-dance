import React from "react";
import styles from "./StudentSchedule.module.css"
import Calendar from "./Calendar";

const StudentSchedule = () => {
    return (
        <div className={styles.main}>
            <div className='container'>
                <Calendar />
            </div>
        </div>
    )
}

export default StudentSchedule;