import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card/card';
import './App.css'
import Form from './components/form/form';

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
      <h1 className='page-title'>Вывод всех постов из API</h1>
      <ul className='post-list'>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>

      <h2 className='page-title'>Форма обратной связи</h2>
      <div className='flex-wrapper'>
        <Form />
      </div>
    </div>
  );
}

export default App;

