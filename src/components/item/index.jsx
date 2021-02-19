import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
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
            <Link to={`detail/${id}`}>
                <img alt={title}
                src={loading ? imgLoading : src} 
                ref={img}
                onLoad={() => handleLoading()}/>
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default Item;