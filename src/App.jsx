import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    axios
      .get("http://api/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className='container'>
      <h1>Вывод постов из API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

