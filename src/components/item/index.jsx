import React, { useRef, useState } from 'react';
import styles from './item.module.css';
import imgLoading from '../../img/loading.gif';

const Item = ({data}) => {

    const [loading, setLoading] = useState(true)
    const { id, src, title } = data;
    const img = useRef();

    const handleLoading = () => {
        img.current.complete && setLoading(false);
    }

    return(
        <li className={styles.item}
        key={id} id={id}>
            <img alt={title}
             src={loading ? imgLoading : src} 
             ref={img}
             onLoad={() => handleLoading()}/>
            <p>{title}</p>
        </li>
    )
}

export default Item;