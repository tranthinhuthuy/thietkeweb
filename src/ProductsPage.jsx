import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    
    const products = [
        { name: "Football", price: "$49.99", inStock: true },
        { name: "Basketball", price: "$9.99", inStock: true },
        { name: "iPod Touch", price: "$99.99", inStock: false },
        { name: "iPhone X", price: "$199.99", inStock: true },
        { name: "Tennis Balls", price: "$199.99", inStock: false },
        { name: "Huawei P10", price: "$199.99", inStock: true },
    ];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStock = !inStockOnly || product.inStock;
        return matchesSearch && matchesStock;
    });

    return (
        <div className="products-page">
            <h1>IronStore</h1>
            <SearchBar onSearch={setSearchTerm} />
            <label>
                <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                />
                Only show products in stock
            </label>
            <ProductTable products={filteredProducts} />
        </div>
    );
};

export default ProductsPage;