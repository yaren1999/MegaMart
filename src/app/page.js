import Image from "next/image";
import styles from "./page.module.css";
import BigScreen from "@/components/BigScreen/BigScreen";
import Categories from "@/components/Categories/Categories";





export default function Home() {
  return (
   <div>
   <BigScreen/>
   <Categories/>

   </div>
  );
}
