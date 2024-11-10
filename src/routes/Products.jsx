import { useState, useEffect } from 'react';

import { getAllProducts } from '../api/api';

import Header from "../components/header/header";
import ProductCard from '../components/product/ProductCard';
import ProductSkeleton from '../components/loader/ProductSkeleton';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const allProducts = await getAllProducts();
                if (allProducts != 0) {
                    setIsLoading(false);
                    setProducts(allProducts);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="container">
            <Header />

            <div className="page-title">Продукты - кастомные типы записей</div>
            <ul className='post-list'>
                {/* {isLoading &&
                    [...Array(3)].map((item) => (
                        <li key={item}><ProductSkeleton /></li>
                    ))
                } */}

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}
