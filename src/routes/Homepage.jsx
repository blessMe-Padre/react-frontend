import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/card/card';
import Header from '../components/header/header';

function Homepage() {
    const [posts, setPosts] = useState([]);

    const getAllPost = () => {
        axios
            .get("https://api.freelancer-vl.ru/wp-json/wp/v2/posts")
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }

    useEffect(() => {
        getAllPost();
    }, []);
    return (
        <div className='container'>
            <Header />

            <h1 className='page-title'>Вывод всех постов из API</h1>
            <ul className='post-list'>
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </ul>
            <footer>footer</footer>
        </div>
    );
}

export default Homepage;

