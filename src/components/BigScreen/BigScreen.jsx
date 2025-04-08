import styles from "./style.module.css";

import Link from "next/link";

import Image from "next/image";
const BigScreen = () => {
    return (
        <div className={styles.container}>
          <div className={styles.textContainer}>
                <p>Best Deal Online on Smart watches </p>
                <h1>SMART WEARABLE</h1>
                <p>UP TO %80 OF</p>

                <Link href="/productDetail/21" className={styles.shopButton}>Buy Now</Link>
            </div>
            <Image className={styles.img} src="/slider/image2.png" width={250} height={200} alt="img" />
        </div >
    )
}

export default BigScreen;
