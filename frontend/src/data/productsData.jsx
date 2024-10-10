import graphicProduct from "../components/Home/Sections/assets/graphic-product.svg";

// Define los productos como un array
export const products = [
    {
        img: graphicProduct,
        name: "Product name 1",
        price: "999.99",
        reviews: 2,  // Cantidad de reviews
        stars: 3,    // Valor de las estrellas
        details: `
            <strong>GAMING IN STYLE</strong><br />
            Play in style! The GAMING series has been upgraded with TRI FROZR 3 to deliver intense performance for both gaming and content creation. High-speed style meets high-performance capabilities for gamers who want to go all out.<br /><br />

            <strong>Toughness and Craftsmanship</strong><br />
            MSI has envisioned the GAMING series as the graphics card solution of choice for all types of gamers including adventurers, esports competitors, live streamers, and more. The GAMING series reflects both the spirit of gamers and the intense performance of the cards with a stylish exterior featuring colorful illumination between lines and bold edges.<br /><br />

            <strong>TORX FAN 5.0</strong><br />
            TORX FAN 5.0 is the culmination of improvements in fan design to increase pressure and airflow across the heatsink. Annular arcs link three sets of fan blades that are tilted 22 degrees together to maintain high-pressure airflow even at slower rotation speeds. Resulting in +23% airflow compared to an axial fan.<br /><br />

            <strong>Relentless Defense</strong><br />
            A die-cast anti-flex plate reinforces the entire card, while thermal pads allow cooling to reach critical components beneath.<br /><br />

            <strong>KEEPING THE CORE COOL</strong><br />
            Core Pipes are precision-crafted to make the most of the available space. A square section of heat pipes fully touches the vapor chamber and then distributes heat across the entire length of the heatsink.
        `,
        specifications: `
            <strong>Engine:</strong> <span class="spec-text">NVIDIA GeForce RTX 4090</span><br />
            <strong>Bus Standard:</strong> <span class="spec-text">PCI Express 4.0</span><br />
            <strong>OpenGL:</strong> <span class="spec-text">OpenGL 4.6</span><br />
            <strong>Video Memory:</strong> <span class="spec-text">24GB GDDR6X</span><br />
            <strong>Base Clock Frequency:</strong> <span class="spec-text">2595 MHz</span><br />
            <strong>OC Clock Frequency:</strong> <span class="spec-text">2610 MHz</span><br />
            <strong>CUDA Cores:</strong> <span class="spec-text">16384</span><br />
            <strong>Memory Speed:</strong> <span class="spec-text">21 Gbps</span><br />
            <strong>Memory Interface:</strong> <span class="spec-text">384-bit</span><br />
            <strong>Resolution:</strong> <span class="spec-text">Maximum digital 7680 x 4320 at 120Hz</span><br />
            <strong>Interface:</strong> <span class="spec-text">3x DisplayPort 1.4a, 1x HDMI 2.1</span><br />
            <strong>Maximum Screen Support:</strong> <span class="spec-text">4</span><br />
            <strong>Dimensions:</strong> <span class="spec-text">337 x 140 x 77 mm</span><br />
            <strong>TDP:</strong> <span class="spec-text">450W</span><br />
            <strong>Recommended Power Supply:</strong> <span class="spec-text">850W</span><br />
            <strong>Connector:</strong> <span class="spec-text">1x 16 pin</span><br />
            <strong>Warranty:</strong> <span class="spec-text">12 Months</span>
`,
    },
    {
        img: graphicProduct,
        name: "Product name 2",
        price: "999.99",
        reviews: 200,
        stars: 4.0,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
    {
        img: graphicProduct,
        name: "Product name 3",
        price: "999.99",
        reviews: 150,
        stars: 3.8,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
    {
        img: graphicProduct,
        name: "Product name 4",
        price: "999.99",
        reviews: 250,
        stars: 4.7,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
    {
        img: graphicProduct,
        name: "Product name 5",
        price: "999.99",
        reviews: 50,
        stars: 3.2,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
    {
        img: graphicProduct,
        name: "Product name 6",
        price: "999.99",
        reviews: 300,
        stars: 4.9,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
    {
        img: graphicProduct,
        name: "Product name 7",
        price: "999.99",
        reviews: 175,
        stars: 4.3,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
    {
        img: graphicProduct,
        name: "Product name 8",
        price: "999.99",
        reviews: 80,
        stars: 3.5,
        details: "This is the detailed description of Product 1...",
        specifications: "Here are the technical specifications of Product 1..."
    },
];

// Selecciona los primeros 4 productos para popularProducts
export const popularProducts = products.slice(0, 4);
