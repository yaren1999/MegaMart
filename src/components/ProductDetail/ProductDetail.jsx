import styles from "./style.module.css";

const ProductDetail = ({ product }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.image} src={product.image} alt={product.productName} />
                <div className={styles.name}>{product.productName}</div>
                <div className={styles.price}>${product.price}</div>
                <div className={styles.stock}>Stok: {product.stockAmount} adet</div>
                <div className={styles.description}>{product.description}</div>
            </div>
        </div>    
    );
};

export default ProductDetail;
