import React from 'react';
import {Link} from 'react-router-dom';
import styles from './detailCard.module.css';

const DetailCard = ({data}) => {

    const {id, title, src} = data;

    return(
        <div className={styles.wrap}>
            <Link to={`/`} title={'Back to Home'}>Back to Home</Link>
            <div id={id} className={styles.detail}>
                <img alt="detail" src={src}/>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default DetailCard;