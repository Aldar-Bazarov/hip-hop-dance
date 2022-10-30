import React, {useContext} from "react";
import {AuthContext} from "../../../context/context";
import styles from './Login.module.css'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        console.log(isAuth);
    }

    return (
        <div className='main'>
            <div className='container'>
                <h1 className={styles.title}>Login page</h1>
                <form onSubmit={login}>
                    <label className={styles.field}>
                        Email: <input name="email" />
                    </label>
                    <label className={styles.field}>
                        Password: <input name="password" type="password"/>
                    </label>
                    <button  className={styles.submitBtn} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;