"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import 'swiper/css';
import styles from "./style.module.css";
import Link from 'next/link';

const Electronics = () => {
    const images = [
        {
            src: "/electronics/grey.png",
            title: "IPHONE",
            logo: "/electronics/iphone.png",
            link: "/productDetail/1"
        },
        {
            src: "/electronics/yellow.png",
            title: "REAL ME",
            logo: "/electronics/realmee.png",
            link: "/productDetail/2"
        },
        {
            src: "/electronics/pink.png",
            title: "XIAOMI",
            logo: "/categories/phone.png",
            link: "/productDetail/3"
        },
        {
            src: "/electronics/grey.png",
            title: "IPHONE",
            logo: "/electronics/iphone.png",
            link: "/productDetail/1"
        },
        {
            src: "/electronics/yellow.png",
            title: "REAL ME",
            logo: "/electronics/realmee.png",
            link: "/productDetail/2"
        },
        {
            src: "/electronics/pink.png",
            title: "XIAOMI",
            logo: "/categories/phone.png",
            link: "productDetail//3"
        },
        {
            src: "/electronics/grey.png",
            title: "IPHONE",
            logo: "/electronics/iphone.png",
            link: "/productDetail/1"
        },
    ];

    const swiperRef = useRef(null);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Top Electronic Bands</h2>
                <div className={styles.buttons}>
                    <button onClick={() => swiperRef.current?.slidePrev()} className={styles.button}>
                        <GrFormPrevious size={24} />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()} className={styles.button}>
                        <GrFormNext size={24} />
                    </button>
                </div>
            </div>

            <hr className={styles.divider} />

            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slideContent}>
                            <div className={styles.imageWrapper}>
                                <Image className={styles.img} src={image.src} width={400} height={250} alt={image.title} quality={100} />
                                <div className={styles.overlay}>
                                    <h3 className={styles.titleText}>{image.title}</h3>
                                    <Image className={styles.logo} src={image.logo} width={160} height={100} alt={`${image.title} logo`} />
                                    <Link href={image.link} className={styles.shopButton}>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Electronics;
