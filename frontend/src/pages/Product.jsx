import React from 'react';
import { Nav } from "../components/shared/Nav/Nav.jsx"
import { useParams } from 'react-router-dom';
import Footer from "../components/shared/Footer/Footer.jsx";

function ProductDetail() {
    const { productName } = useParams(); // Accede al nombre del producto desde la URL

    return (
        <div>
            <Nav />
            <h1>Detalles del producto: {productName.replace(/-/g, ' ')}</h1>
            {/* Aquí puedes renderizar detalles adicionales del producto */}
            <Footer />
        </div>
    );
}

export default ProductDetail;