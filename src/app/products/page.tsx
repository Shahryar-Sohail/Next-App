import Image from "next/image"
import Link from "next/link"
import { item } from "@/app/types"
import BuyButton from "../components/BuyButton"

async function ProductsPage() {
    const getAllProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products", {
            next: { revalidate: 60 }
        })
        if (!res.ok) {
            throw new Error("Failed to fetch products")
        }
        return res.json()
    }

    const Products = await getAllProducts()

    return (
        <div className="flex flex-wrap gap-5 justify-center my-10  mt-20 ">
            {Products.map((item: item) => (
                <div key={item.id} className="card bg-base-100 w-96 shadow-sm ">
                    <Link href={`/products/${item.id}`} className="flex justify-center">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={240}
                            height={320}
                            className="h-80 w-60  object-contain mt-5  transition-transform duration-300 
             hover:scale-105"
                        />
                    </Link>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description.slice(0, 100)}...</p>
                        <div className="card-actions justify-end">
                            <BuyButton item={item} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsPage
