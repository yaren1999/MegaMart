"use client"
import styles from "./style.module.css"
import categories from "../../data/categories.json"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Categories = () => {

    const router = useRouter();
    return (
        <div className={styles.container}>
            {categories.map((c) => {
                return (
                    
                    <div className={styles.card} key={c.categoryId} onClick={() => router.push(`/products/${c.categoryId}`)}>
                        <Image src={c.img} width={50} height={50} alt="img" className={styles.img} /> 
                        <div className={styles.name}>{c.categoryName}</div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Categories; 
