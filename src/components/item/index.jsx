import React from 'react';
import styles from './item.module.css';

const Item = ({data}) => {

    const { id, src, title } = data;

    return(
        <li className={styles.item}
        key={id} id={id}>
            <img alt={title} src={src}/>
            <p>{title}</p>
        </li>
    )
}

export default Item;