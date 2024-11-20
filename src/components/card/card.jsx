/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css'
import { Link } from 'react-router-dom';

function Card({ post }) {

    const [featuredImage, setFeaturedImage] = useState();

    const getPostImage = () => {
        const mediaLink = post?._links?.["wp:featuredmedia"]?.[0]?.href;

        if (mediaLink) {
            axios
                .get(mediaLink)
                .then((res) => {
                    setFeaturedImage(res.data.source_url);
                })
                .catch((error) => {
                    console.error('Error fetching post image:', error);
                    setFeaturedImage('https://placehold.co/600x400.png');
                });
        } else {
            console.warn('Media link not found');
            setFeaturedImage('https://placehold.co/600x400.png');
        }
    }

    useEffect(() => {
        getPostImage();
    }, []);

    return (
        <li className='card'>
            <img src={featuredImage} width={393} height={300} alt="image" />
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link key={post.id} to={`/react-frontend/blog/${post.id}`} state={{ post }}>перейти</Link>
        </li>
    )
}

export default Card;

