import { useParams, useLocation } from 'react-router-dom';

import Header from "../components/header/header";

export default function SingleProduct() {
    const { productId } = useParams();
    const location = useLocation();
    const product = location.state?.product;

    return (
        <div className="container">
            <Header />
            <div className="page-title">Получение авто с ID {productId}</div>

            {product ? (
                <div className='product-wrapper'>

                    <div className='product-img'>
                        <img src={product.acf_fields.foto} width={700} height={500} alt="" />
                    </div>
                    <div className='product-description'>
                        <p>ID продукта: {product.id}</p>
                        <p>Марка: {product.title.rendered}</p>
                        <p>Количество пассажиров: {product.acf_fields.passengers}</p>
                        <p>Тип топлива: {product.acf_fields.fuel_type}</p>
                        <p>Год выпуска: {product.acf_fields.year_production}</p>
                    </div>




                </div>
            ) : (
                <p>product не найден</p>
            )}
        </div>
    );
}


