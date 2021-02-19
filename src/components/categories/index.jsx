import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './categories.module.css'
import List from '../list';

const Categories = ({categories}) => {

    const conditionalRender = categories.length !== 0;

    return(
        <>
        {conditionalRender &&
        <ul 
        className={styles.list}>
            {categories.map(ct => 
            <li className={styles.item}
            id={uuidv4()}
            key={uuidv4()}>
                <h2 className={styles.title}>category: <em>{ct}</em></h2>
                <List key={ct} categories={ct}/>
            </li>)}
        </ul>
        }
        </>
    );
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default Categories;