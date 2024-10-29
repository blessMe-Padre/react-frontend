/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import './product.css';

export default function ProductCard({ product }) {
    return (
        <li key={product.id} className='product-card'>
            <img src={product.acf_fields.foto} alt="" />
            <p>{product.title.rendered}</p>
            <Link key={product.id} to={`/react-frontend/products/${product.id}`} state={{ product }}>перейти</Link>
        </li>
    )
}
