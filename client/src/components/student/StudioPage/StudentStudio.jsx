import React from "react";
import styles from "./StudentStudio.module.css"
import Slider from "../Slider/Slider";
import { useState } from "react";
import { useFetching } from '../../../hooks/useFetching'

const StudentMain = () => {
    // const [studioInfo, setStudioInfo] = useState();

    // const [fetchStudioInfo, isInfoLoading, infoError] = useFetching(async () => {
    //     setTimeout(async () => {
    //         setNewsLoadnig(true)
    //         const response = await getStudioInfo();
    //         setStudioInfo([...response])
    //         setNewsLoadnig(false)
    //     }, 500)
    // })

    return (
        <div className={styles.main}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.textInfo}>
                        <h2>Школа хип-хоп танцев "Pulse"</h2>
                        <p>В центре Pulse вы научитесь самым популярным танцевальным направлениям. Любой желающий освоить технику хип-хоп может записаться к нам на групповое обучение. Талантливые танцоры – настоящие асы своего дела – проведут для вас яркие и запоминающиеся занятия. Выйдя из андеграунда в конце 90-х, хип-хоп стал одним из самых популярных музыкальных направлений среди молодежи. Это не просто музыка, не просто танец, это настоящая философия свободы. В плане хореографии она включает постоянное смешение стилей и движение под уличный бит. Каждый хип-хоп танец – это творчество, бесконечная импровизация и многочисленные эксперименты, именно поэтому процесс обучения дает массу положительных эмоций каждому. Он не ограничен жесткими рамками и дарит полную свободу самовыражения. Школа хип-хоп танцев предоставляет большие возможности любителям уличного направления. Несложные, но одновременно с этим выразительные движения под ритмичную музыку позволяют с первых уроков прочувствовать атмосферу свободы и максимально раскрыться. Хип-хоп студия Pulse предлагает освоить это популярное танцевальное направление и получить массу позитива. А помогут в этом высококлассные преподаватели с большим профессиональным стажем!</p>
                    </div>
                    <div className={styles.slider}>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentMain;