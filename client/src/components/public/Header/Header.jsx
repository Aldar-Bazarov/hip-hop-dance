import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/context';

const Header = (props) => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    const del = Math.ceil(props.data.length / 2);
    const fArray = []
    const sArray = []
    for (let i = 0; i < props.data.length; i++) {
        if (i < del) {
            fArray.push(props.data[i])
        } 
        else {
            sArray.push(props.data[i])
        }
    }

    return (
        <header className={styles.header}>
            <div className='container'>
                <nav id="nav" className={styles.nav}>
                    <ul className={styles.navList}>
                        <Link to={'/'}>
                            <li className={styles.logo}>{props.logo}</li>
                        </Link>
                        {fArray.map(el =>
                            <Link to={el.path} className={styles.navLink}>
                                <li className={styles.navItem}>{el.title}</li>
                            </Link>
                        )}
                        {sArray.map(el =>
                            <Link to={el.path} className={styles.navLink}>
                                <li className={styles.navItem}>{el.title}</li>
                            </Link>
                        )}
                        {isAuth && <li className={styles.navItem} onClick={logout}>Выйти</li>}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;