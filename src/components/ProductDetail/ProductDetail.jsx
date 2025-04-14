"use client";
import { useState } from "react";
import styles from "./style.module.css";

const ProductDetail = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedStorage, setSelectedStorage] = useState('128GB');

  const colors = ['black', 'white', 'blue', 'red', 'green'];
  const storages = ['128GB', '256GB', '512GB', '64GB'];

  return (
    
      <div className={styles.wrapper}>
       
      {/* Breadcrumb alanı */}
      <div className={styles.breadcrumbs}>
        <span className={styles.breadcrumb}>Home</span> &gt;&nbsp;
        <span className={styles.breadcrumb}>Catalog</span> &gt;&nbsp;
        <span className={styles.breadcrumb}>Smartphones</span> &gt;&nbsp;
        <span className={styles.breadcrumb}>Apple</span> &gt;&nbsp;
        <span className={styles.selectedProduct}>{product.productName}</span>
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={product.image} alt={product.productName} />
        <div className={styles.name}>{product.productName}</div>
        <div className={styles.price}>${product.price}</div>
        <div className={styles.stock}>Stok: {product.stockAmount} adet</div>
        <div className={styles.description}>{product.description}</div>
      </div>

     
      <div className={styles.detailsContainer}>
        <div className={styles.detailsTitle}>IPHONE 14 PRO MAX</div>
        <div className={styles.detailsPrice}>${product.price}</div>
        <div className={styles.detailsOldPrice}>${product.oldPrice}</div>

        <div className={styles.colorSelection}>
          <label>Select Color: </label>
          <div className={styles.colorOptions}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`${styles.colorBox} ${styles[color]}`}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>

        
        <div className={styles.storageSelection}>
          <label>Select Storage: </label>
          <div className={styles.storageOptions}>
            {storages.map((storage, index) => (
              <button
                key={index}
                className={`${styles.storageButton} ${selectedStorage === storage ? styles.selected : ''}`}
                onClick={() => setSelectedStorage(storage)}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>

        
        <div className={styles.actionButtons}>
          <button className={styles.wishlistButton}>Add to Wishlist</button>
          <button className={styles.cartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

