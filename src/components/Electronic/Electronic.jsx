"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import 'swiper/css';
import styles from "./style.module.css";

const Electronics = () => {
    const images = [
        "/electronics/grey.png",
        "/electronics/yellow.png",
        "/electronics/pink.png",
        "/electronics/grey.png",
        "/electronics/yellow.png",
        "/electronics/pink.png"
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
                {images.map((i, index) => (
                    <SwiperSlide key={index}>
                        <Image className={styles.img} src={i} width={200} height={150} alt='img' quality={100} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Electronics;
