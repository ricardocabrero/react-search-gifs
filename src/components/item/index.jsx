import React, { useState } from 'react';
import styles from './item.module.css';
import imgLoading from '../../img/loading.gif';

const Item = ({data}) => {

    const [loading, setLoading] = useState(true)
    const { id, src, title } = data;

    return(
        <li className={styles.item}
        key={id} id={id}>
            <img alt={title}
             src={loading ? imgLoading : src} 
             onLoad={() => setLoading(false)}/>
            <p>{title}</p>
        </li>
    )
}

export default Item;