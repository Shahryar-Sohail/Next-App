import Image from "next/image";
import ProductsPage from "./products/page";

export default function Home() {
  return (

    <div>

      <div className="relative w-full h-[80vh]">
        <Image
          src="/hero.jpg"
          alt="Description of image"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center my-5">Welcome to Our Store</h1>
        <ProductsPage />
      </div>
    </div>



  );
}
