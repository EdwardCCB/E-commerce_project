import React from 'react';
import {Nav} from "../components/shared/Nav/Nav.jsx"
import {Present} from "../components/Home/Present/Present.jsx"
import {Brands} from "../components/Home/Brands/Brands.jsx"
import {Sections} from "../components/Home/Sections/Sections.jsx";
import graphicProduct from "../components/Home/Sections/assets/graphic-product.svg"
import promo from "../components/Home/Promo/assets/promo.png";
import Footer from "../components/shared/Footer/Footer.jsx";
import Promo from "../components/Home/Promo/Promo.jsx";

function Home() {
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
            <Nav></Nav>
            <Present></Present>
            <>
                <Sections
                    title="Products"
                    description="Order it for you or for your beloved ones"
                    products={products}
                />
                <Promo promo={promo} />
                <Brands></Brands>
                <Sections
                    title="Popular"
                    description="Our top selling product that you may like"
                    products={popularProducts}
                />
            </>
            <Footer />
        </div>
    );
}

export default Home