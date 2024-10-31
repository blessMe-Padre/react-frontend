// import axios from "axios";
// import { useState} from 'react;

// const apiBaseUrl = "https://api.freelancer-vl.ru/wp-json/wp/v2/posts";

// const useAllPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(apiBaseUrl);
//         setPosts(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return { posts, isLoading, error };
// };

// const useCategoryPosts = (categoryId) => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`${apiBaseUrl}/?categories=${categoryId}`);
//         setPosts(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [categoryId]);

//   return { posts, isLoading, error };
// };

// export { useAllPosts, useCategoryPosts };

