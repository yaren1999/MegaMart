import Image from "next/image";
import styles from "./page.module.css";
import BigScreen from "@/components/BigScreen/BigScreen";
import Categories from "@/components/Categories/Categories";
import Electronics from "@/components/Electronic/Electronic";
import Phones from "@/components/Phones/Phones";
import Fruits from "@/components/Fruits/Fruits";






export default function Home() {
  return (
   <div>
   <BigScreen/>
   <Phones/>
   <Categories/>
   <Electronics/>
   <Fruits/>
  
   </div>
  );
}
