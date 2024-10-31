import { useState, useEffect } from 'react';

import Card from '../components/card/card';
import Header from '../components/header/header';

import { getAllPosts, getPostsByCategory } from '../api/api.jsx';


export default function Blog() {
    const [allPosts, setAllPosts] = useState([]);
    const [categoryPosts, setCategoryPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allPostsData = await getAllPosts();
                setAllPosts(allPostsData);
        
                const categoryPostsData = await getPostsByCategory(5);
                setCategoryPosts(categoryPostsData);
            } catch (error) {
                console.error("Error fetching data:", error); 
            }
        };

        fetchData();

    }, []);
      
 

    return (
        <div className='container'>
            <Header />

            <h1 className='page-title'>Вывод всех постов из API</h1>
            <ul className='post-list'>
                {allPosts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </ul>

            <h2 className='page-title'>Вывод всех постов из категории &quot;html&quot; с id=&quot;5&quot;</h2>
            <ul className='post-list'>
                {categoryPosts.map((posts) => (
                    <Card key={posts.id} post={posts} />
                ))}
            </ul>
            <footer>footer</footer>
        </div>
    );
}
