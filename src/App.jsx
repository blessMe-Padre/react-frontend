import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card/card';
import './App.css'

function App() {
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
      <h1 className='page-title'>Вывод постов из API</h1>
      <ul className='post-list'>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>

      <p className='text'>Тут будет форма</p>
    </div>
  );
}

export default App;

