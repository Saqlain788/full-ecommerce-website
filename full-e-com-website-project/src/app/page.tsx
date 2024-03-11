import Image from "next/image";
import image from "/public/image.webp"
import Hero from "@/views/Hero";
import EventBaners from "@/views/EventBaners/page";
import ProductList from "@/views/productList";
import ProductInform from "@/views/ProductInform";


export default function Home() {
  return (
  <div>
<Hero/>
<EventBaners/>
<ProductList/>
<ProductInform/>


    </div>
   
  );
}
