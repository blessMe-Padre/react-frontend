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

const searchProduct = async ({ type, subtype, search, page, per_page }) => {
    try {

        const type_str = type ? `&type=${type}` : '';
        const subtype_str = subtype ? `subtype=${subtype}` : '';
        const search_str = search ? `&search=${search}` : '';
        const page_str = page ? `&page=${page}` : '';
        const per_page_str = per_page ? `&per_page=${per_page}` : '';

        const response = await axios.get(`https://api.freelancer-vl.ru/wp-json/wp/v2/search/?${type_str}${subtype_str}${search_str}${page_str}${per_page_str}`);

        if (response.status === 200) {
            console.log(response.request)
            return response.data;

        } else {
            throw new Error(`API request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error('Error searching products:', error, response.request);
        throw error;
    }

}

export { getAllPosts, getPostsByCategory, getAllProducts, searchProduct };
