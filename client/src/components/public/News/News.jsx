import React from "react";
import styles from './News.module.css'
import { useState, useEffect } from "react";
import ItemNews from "./ItemNews/ItemNews";
import { getPageCount, getPagesArray } from "../../utils/pages";
import { useFetching } from '../../../hooks/useFetching'
import { getNews } from "../../../api/NewsService";
import { arrayNews } from "../../../api/data/newsData";
import Loader from "../../../ui/Loader/Loader";
import Pagination from "../../../ui/pagination/Pagination";

const News = () => {

    const [news, setNews] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [newsLoading, setNewsLoadnig] = useState(false);
    const limit = 5;

    const [fetchNews, isNewsLoading, newsError] = useFetching(async (limit, page) => {
        setNewsLoadnig(true)
        setTimeout(async () => {
            const response = await getNews(limit, page);
            setNews([...response])
            const totalCount = arrayNews.length
            setTotalPages(getPageCount(totalCount, limit));
            setNewsLoadnig(false)
        }, 500)
    })

    useEffect(() => {
        fetchNews(limit, page)
    }, [page, limit])

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className='main'>
            <div className='container'>
                <Pagination 
                    page={page}
                    changePage={changePage}
                    totalPages={totalPages}
                />

                {newsError &&
                    <h1>Произошла ошибка ${newsError}</h1>
                }

                {newsLoading
                    ? <div className={styles.loader}><Loader /></div>
                    : news.map(el =>
                        <ItemNews title={el.title} description={el.description} img={el.img} />
                    )}
            </div>
        </div>
    )
}

export default News;