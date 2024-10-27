import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import Header from "../components/header/header";

export default function SinglePost() {
    const { postId } = useParams();
    const location = useLocation();
    const post = location.state?.post;

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
        <div className="container">
            <Header />
            <div className="page-title">Получение поста с ID {postId}</div>

            {post ? (
                <div>
                    <h1>{post.title.rendered}</h1>
                    <img src={featuredImage} width={393} height={300} alt="image" />
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
            ) : (
                <p>Пост не найден</p>
            )}
        </div>
    );
}


