import React from 'react';
import { getPagesArray } from '../../components/utils/pages';
import styles from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className={styles.wrapper}>
            {pagesArray.map( el =>
                <span
                    className={styles.togglePages}
                    onClick={() => changePage(el)}
                    key={el}
                >
                    {el}
                </span>
            )}
        </div>
    );
};

export default Pagination;
