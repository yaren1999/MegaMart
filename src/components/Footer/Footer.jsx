import Image from 'next/image';

import styles from "./style.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sol Kısım */}
        <div className={styles.leftContainer}>
          <div className={styles.megaMart}>
            <h1>MegaMart</h1>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>📱</div>
                <span>WhatsApp</span>
              </div>
              <div className={styles.contactItem}>
                <span>Contact Us</span>
                <span>+1 234 567 890</span>
              </div>
              <div className={styles.search}>
                <div className={styles.icon}>🔍</div>
                <span>Call Us</span> 
                <span>+1 234 567 890</span>
              </div>
              <div className={styles.downloadApp}>
                <span>Download App</span>
                <div className={styles.appImages}>
                  <Image src="/footer/footer1.png" width={100} height={30} alt="MegaMart" />
                  <Image src="/footer/footer2.png" width={100} height={30} alt="App" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orta Kısım */}
        <div className={styles.middleContainer}>
          <h2>Most Popular Categories</h2>
          <hr className={styles.divider} />
          <ul className={styles.categories}>
            {['Electronics', 'Furniture', 'Clothing', 'Toys', 'Beauty', 'Books', 'Sports'].map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Sağ Kısım */}
        <div className={styles.rightContainer}>
          <h2>Customer Services</h2>
          <hr className={styles.divider} />
          <ul className={styles.services}>
            <li>About Us</li>
            <li>Terms</li>
            <li>FAQ</li>
            <li>Privacy policy</li>
            <li>E-waste policy</li>
            <li>Cansellation & Return policy</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <hr />
        <p>@2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
