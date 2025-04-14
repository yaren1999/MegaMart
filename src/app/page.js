import Image from "next/image";
import styles from "./page.module.css";
import BigScreen from "@/components/BigScreen/BigScreen";
import Categories from "@/components/Categories/Categories";
import Electronics from "@/components/Electronic/Electronic";





export default function Home() {
  return (
   <div>
   <BigScreen/>
   <Categories/>
   <Electronics/>

   </div>
  );
}
