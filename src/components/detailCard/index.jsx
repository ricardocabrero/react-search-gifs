import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { gsap } from "gsap";
import imgLoading from '../../img/loading.gif'
import styles from './detailCard.module.css';

const DetailCard = ({data}) => {

    const [loading, setLoading] = useState(true)
    const { id, src, title } = data;
    const img = useRef();

    const handleLoading = () => {
        img.current.complete && setLoading(false);
    }

    useEffect(() => {
        gsap.to("#detail", {duration: 2, y: 100, ease: "bounce"});
    },[])


    return(
        <div id={id} className={styles.wrap}>
            <Link to={`/`} title={'Back to Home'}>Back to Home</Link>
            <div id="detail" className={styles.detail}>
                <img alt={title} 
                ref={img}
                onLoad={() => handleLoading()}
                src={loading ? imgLoading : src}/>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default DetailCard;