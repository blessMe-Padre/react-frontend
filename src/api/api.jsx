import axios from "axios";

const apiBaseUrl = "https://api.freelancer-vl.ru/wp-json/wp/v2/posts?status=publish,draft,trash";

const getAllPosts = async () => {
    try {
        const response = await axios.get(apiBaseUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('api-admin:wkan)i44GgLBx*EwKd')
            }
        });
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

const getAllProducts = async () => {
    try {
        const response = await axios.get("https://api.freelancer-vl.ru/wp-json/wp/v2/product?acf_format=standart&_fields=id,title,acf_fields");
        return response.data;
    } catch (error) {
        console.error(`Error fetching products:`, error);
        throw error;
    }
}

const searchProduct = async ({ subtype, search, page, per_page }) => {
    try {

        const search_str = search ? `&search=${encodeURIComponent(search)}` : '';
        const page_str = page ? `&page=${page}` : '';
        const per_page_str = per_page ? `&per_page=${per_page}` : '';

        let url = `https://api.freelancer-vl.ru/wp-json/wp/v2/posts/?${search_str}${page_str}${per_page_str}`;
        let response = await axios.get(url);

        if (response.status === 200 && response.data.length > 0) {
            return response.data;
            
        } else if (response.status === 200 && response.data.length === 0) {
            url = `https://api.freelancer-vl.ru/wp-json/wp/v2/product/?${search_str}${page_str}${per_page_str}`;
            response = await axios.get(url);

        if (response.status === 200) {
            return response.data; 

        } else {
            throw new Error(`API request for products failed with status ${response.status}`);
        }

        } else {
            throw new Error(`API request for posts failed with status ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw error; 
    }

}

export { getAllPosts, getPostsByCategory, getAllProducts, searchProduct };
