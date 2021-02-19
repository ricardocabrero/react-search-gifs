import React, { useEffect, useState } from 'react';
import styles from './list.module.css';
import getGifs from '../../utils/getGifs';
import Item from '../item';


const List = ({categories}) => {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getGifs(categories)
            .then(data => {
            setResults(state => ([...state, ...data]));
            setLoading(false);
            });
    },[categories]);

    return(
        results.length !== 0 ?
        <ul className={styles.list}>
            {loading && <p className={styles.warning}>Loading...</p>}
            {results.map(data => <Item key={data.id} data={data}/>)}
        </ul>
        : <p className={styles.warning}>This category <strong>({categories})</strong> has no results.</p>
    )
}

export default List;