import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Fruits = () => {
  const products = [
    {
      image: "/fruits/sepet.png",
      brand: "Veg and Fruit",
      description: "Fresh daily mix",
      link: "/productDetail/25"
    },
    {
      image: "/fruits/bagfruit.png",
      brand: "Muz",
      description: "Organic bananas",
      link: "/productDetail/26"
    },
    {
      image: "/fruits/mix.png",
      brand: "Portakal",
      description: "Juicy oranges",
      link: "/productDetail/27"
    },
    {
      image: "/fruits/kiraz.png",
      brand: "Kavun",
      description: "Sweet melon",
      link: "/productDetail/28"
    },
    {
      image: "/fruits/mango.png",
      brand: "Üzüm",
      description: "Seedless grapes",
      link: "/productDetail/29"
    },
    {
      image: "/fruits/çilek.png",
      brand: "Armut",
      description: "Crispy pears",
      link: "/productDetail/30"
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.normal}>Daily </span>
        <span className={styles.highlight}>Essentials</span>
      </h2>
      <hr className={styles.headerDivider} />
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={product.image}
              alt={product.brand}
              width={180}
              height={130}
              className={styles.image}
            />
            <h3 className={styles.brand}>{product.brand}</h3>
            <p className={styles.description}>{product.description}</p>
            <hr className={styles.divider} />
            <Link href={product.link} className={styles.button}>Shop Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;

