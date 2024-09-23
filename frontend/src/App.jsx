import React from 'react';
import { Sections } from "./components/Sections.jsx";
import graphicProduct from "./assets/graphic-product.svg"
import Footer from "./components/Footer.jsx";

function App() {
    const products = [
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
    ];
    const popularProducts = [
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
        {
            href: "#",
            img: graphicProduct,
            name: "Product name",
            price: "999.99",
        },
    ];
    return (
        <div>
            <>
                <Sections
                    title="Products"
                    description="Order it for you or for your beloved ones"
                    products={products}
                />
                <Sections
                    title="Products"
                    description="Our top selling product that you may like"
                    products={popularProducts}
                />
            </>
            <Footer />
        </div>
    );
}

export default App
