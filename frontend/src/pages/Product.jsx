import React from 'react';
import { Nav } from "../components/shared/Nav/Nav.jsx";
import { useParams } from 'react-router-dom';
import Footer from "../components/shared/Footer/Footer.jsx";
import { products } from "../data/productsData.jsx";
import BuyProduct from '../components/Product/BuyProduct/BuyProduct.jsx';

function Product() {
    const { productName } = useParams();
    const productKey = productName.replace(/-/g, ' ').toLowerCase(); // Convierte el nombre para que coincida

    // Busca el producto en el array
    const product = products.find(product => product.name.toLowerCase() === productKey);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Nav />
            <BuyProduct img={product.img} name={product.name} price={product.price} />
            <Footer />
        </>
    );
}

export default Product;