
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css"



const Phones = () => {
    const products = [
        {
            
            image: "/electronics/iphone.png",
            brand: "IPHONE 13",
            price: "$799",
            oldPrice: "$899",
            link: "/productDetail/1"
        },
        {
            
            image: "/electronics/samsung.png",
            brand: "SAMSUNG Galaxy",
            price: "$399",
            oldPrice: "$499",
            link: "/productDetail/2"
        },
        {
           
            image: "/electronics/oneplus.png",
            brand: "ONE PLUS 9 PRO",
            price: "$299",
            oldPrice: "$379",
            link: "/productDetail/4"
        },
        {
           
            image: "/electronics/iphone15.png",
            brand: "IPHONE 15",
            price: "$449",
            oldPrice: "$529",
            link: "/productDetail/5"
        },
        {
     
            image: "/electronics/phone2.png",
            brand: "REAL ME NEO",
            price: "$349",
            oldPrice: "$419",
            link: "/productDetail/6"
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Grab the best deal <span className={styles.highlight}>SMART PHONE</span></h2>
            <hr className={styles.headerDivider} />
            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <Image src={product.image} alt={product.brand} width={200} height={150} className={styles.image} />
                        <h3 className={styles.brand}>{product.brand}</h3>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>{product.price}</span>
                            <span className={styles.oldPrice}>{product.oldPrice}</span>
                        </div>
                        <hr className={styles.divider} />
                        <Link href={product.link} className={styles.button}>Shop Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Phones;


