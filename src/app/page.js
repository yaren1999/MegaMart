import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/ProductList/ProductList";
import products from "../data/products.json"



export default function Home() {
  return (
   <div>
   
   <ProductList productList={products} />

   </div>
  );
}
