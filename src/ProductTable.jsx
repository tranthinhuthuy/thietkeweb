import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
    const rows = products.map((product, index) => (
        <ProductRow 
            key={index} 
            product={product} />
    ));

    return (
        <div className="product-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default ProductTable;