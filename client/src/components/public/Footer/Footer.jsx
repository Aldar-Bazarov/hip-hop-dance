import React from "react";
import styles from './Footer.module.css'
import inst from './inst.png'
import vk from './vk.png'
import tg from './tg.png'
import youtube from './youtube.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.contactsTitle}>
                    <h2 className={styles.title1}>Контакты</h2>
                </div>
                <div className={styles.contactsButton}>
                    <a href="gamil.com" className={styles.btn}>Отправить сообщение</a>
                </div>
                <div className={styles.contactsSocial}>
                    <a href="instagram.com"><img src={inst} alt="inst" /></a>
                    <a href="vk.com"><img src={vk} alt="vk" /></a>
                    <a href="tg.com"><img src={tg} alt="tg" /></a>
                    <a href="youtube.com"><img src={youtube} alt="youtube" /></a>
                </div>
                <div className={styles.pages}>
                    <ul>
                        <Link to={'/about'}>
                            <li>О нас</li>
                        </Link>
                        <Link to={'/mail'}>
                            <li>Написать на почту</li>
                        </Link>
                        <Link to={'/FAQ'}>
                            <li>FAQ</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.rights}>
                    <p>All Rights Reserved<br />© 2022 SBC</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;