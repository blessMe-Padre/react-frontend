import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/card/card';
import Header from '../components/header/header';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [postsHtml, setPostsHtml] = useState([]);

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

    const getPostByCategoriesId = (id) => {
        axios
            .get(`https://api.freelancer-vl.ru/wp-json/wp/v2/posts/?categories=${id}`)
            .then((res) => {
                setPostsHtml(res.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }

    useEffect(() => {
        getPostByCategoriesId(5);
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

            <h2 className='page-title'>Вывод всех постов из категории &quot;html&quot; с id=&quot;5&quot;</h2>
            <ul className='post-list'>
                {postsHtml.map((posts) => (
                    <Card key={posts.id} post={posts} />
                ))}
            </ul>
            <footer>footer</footer>
        </div>
    );
}
