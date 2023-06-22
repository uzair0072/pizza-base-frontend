import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import productsData from "../../products.json";

function ItemsList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts(category);
    }, [category]);

    function fetchProducts(category) {
        // Filter the products based on the category
        const filteredProducts = productsData.filter(
            (product) => product.category === category
        );
        // Set the filtered products
        setProducts(filteredProducts);
    }

    return (
        <>
            <NavBar />
            <div>
                <h1>Item List Page</h1>
                <h2>Category: {category}</h2>
                {/* Render the products */}
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default ItemsList;
