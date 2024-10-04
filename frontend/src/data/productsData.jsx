import graphicProduct from "../components/Home/Sections/assets/graphic-product.svg";

// Define los productos como un array
export const products = [
    {
        img: graphicProduct,
        name: "Product name 1",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 2",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 3",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 4",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 5",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 6",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 7",
        price: "999.99",
    },
    {
        img: graphicProduct,
        name: "Product name 8",
        price: "999.99",
    },
];

// Selecciona los primeros 4 productos para popularProducts
export const popularProducts = products.slice(0, 4);