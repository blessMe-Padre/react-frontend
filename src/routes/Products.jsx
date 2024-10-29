import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "../components/header/header";
import ProductCard from '../components/product/ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);

    // тут используется выборочный запрос в api (id,title,acf_fields)
    const getAllProducts = () => {
        axios
            .get("https://api.freelancer-vl.ru/wp-json/wp/v2/product?acf_format=standart&_fields=id,title,acf_fields")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }

    useEffect(() => {
        getAllProducts();
    }, []);


    return (
        <div className="container">
            <Header />

            <div className="page-title">Продукты - кастомные типы записей</div>

            <ul className='post-list'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}
