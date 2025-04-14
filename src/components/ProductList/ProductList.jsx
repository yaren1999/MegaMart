import Product from "../Product/Product";
import styles from "./style.module.css"
import products from "../../data/products.json"

const ProductList = ({ productList}) => {
    return (
        <div className={styles.container}>
            {productList.map((p) => {
                return (
                    <Product key={p.productId} product={p} />
                )
            })}
        </div>
    )
}

export default ProductList;
