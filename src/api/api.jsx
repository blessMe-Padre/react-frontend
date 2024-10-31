import axios from "axios";

const apiBaseUrl = "https://api.freelancer-vl.ru/wp-json/wp/v2/posts";

const getAllPosts = async () => {
    try {
        const response = await axios.get(apiBaseUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching all posts:", error);
        throw error; 
    }
};

const getPostsByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/?categories=${categoryId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching posts for category ${categoryId}:`, error);
        throw error; 
    }
};

export { getAllPosts, getPostsByCategory };
