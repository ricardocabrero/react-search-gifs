import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import getGifs from '../../utils/getGifs';
import DetailCard from '../../components/detailCard';

const Detail = () => {
    const urlParam = useParams();
    const {param} = urlParam;

    const [detail, setDetail] = useState({});

    useEffect(() => {
        getGifs(param, 'id')
            .then(data => {
                setDetail(state => (data));
            });
    },[param]);

    return(
        <DetailCard data={detail}/>
    )
}

export default Detail;