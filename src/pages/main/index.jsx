import React, { useState } from 'react';
import Title from '../../components/title';
import Form from '../../components/form';
import Categories from '../../components/categories';

const Main = () => {

    const [categories, setCategories] = useState([]);

    return(
        <>
            <Title/>
            <Form setCategories={setCategories}/>
            <Categories categories={categories}/>
        </>
    )
}

export default Main;