import React from 'react';
import HandleForm from '../../customHooks/handleForm';
import styles from './form.module.css';

const Form = ({setCategories}) => {

    const [values, handleChange, reset] = HandleForm({
        text: '',
    });

    const { text } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) {
            return;
        }
        setCategories(st => [text, ...st]);
        reset();
    }

    return(
        <div className={styles.field}>
            <form onSubmit={handleSubmit}>
                <label className={styles.sr} htmlFor="text">text</label>
                <input
                placeholder="Search gifs..."
                value={text}
                onChange={handleChange} 
                autoComplete="off"
                className={styles.input}  id="text" type="text"/>
                <button className={styles.button} type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form;