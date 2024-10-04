import React from 'react';
import {Nav} from "../components/shared/Nav/Nav.jsx"
import {Present} from "../components/Home/Present/Present.jsx"
import {Brands} from "../components/Home/Brands/Brands.jsx"
import {Sections} from "../components/Home/Sections/Sections.jsx";
import promo from "../components/Home/Promo/assets/promo.png";
import Footer from "../components/shared/Footer/Footer.jsx";
import Promo from "../components/Home/Promo/Promo.jsx";
import { products, popularProducts } from "../data/productsData.jsx";

function Home() {
    return (
        <div>
            <Nav />
            <Present />
            <>
                <Sections
                    title="Products"
                    description="Order it for you or for your beloved ones"
                    products={products}
                />
                <Promo promo={promo} />
                <Brands />
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