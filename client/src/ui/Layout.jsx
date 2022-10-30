import { Outlet } from 'react-router-dom';
import Header from '../components/public/Header/Header';
import Footer from '../components/public/Footer/Footer';

export const Layout = (props) => {
    return (
        <>
        <Header data={props.data} logo={props.logo}/>

        <Outlet />

        <Footer/>
        </>
    )
}