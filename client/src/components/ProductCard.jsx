import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

    const { deleteProduct } = useProducts();


    return (
        <div className="product-card">
            <h1>{product.name}</h1>
            <p>Descripcion: {product.description}</p>
            <p>Precio: {product.price}$</p>
            <p>Categoria: {product.category}</p>
            <div className="button-container">
                <button className="button-editar">
                    <Link
                        to={`/products/${product._id}`}
                    >Editar
                    </Link> 
                </button>
                <button
                    className="button-eliminar"
                    onClick={() => {
                        deleteProduct(product._id);
                    }}
                >
                    Eliminar</button>
            </div>
        </div>
    )
}

export default ProductCard;