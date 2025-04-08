"use client"
import { useRouter } from "next/navigation";
import styles from "./style.module.css"
import Image from "next/image";


const Product = ({ product }) => {
    const router = useRouter();
    return (
        <div className={styles.container} onClick={() => router.push(`/productDetail/${product.productId}`)}>
            <Image className={styles.img} src={product.image} width={100} height={100} alt="image" />
            <div className={styles.name}>{product.productName}</div>
            <div className={styles.price}>{product.price} $</div>
        </div>
    )
}
export default Product;