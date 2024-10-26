/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css'

function Card({ post }) {

    const [featuredImage, setFeaturedImage] = useState();

    const getPostImage = () => {
        axios
            .get(post?._links["wp:featuredmedia"][0]?.href)
            .then((res) => {
                setFeaturedImage(res.data.source_url);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }

    useEffect(() => {
        getPostImage();
    }, []);

    return (
        <li className='card'>
            <img src={featuredImage} alt="" />
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link}>перейти</a>
        </li>
    )
}

export default Card;