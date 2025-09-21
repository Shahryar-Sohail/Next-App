import BackButton from "@/app/components/BackButton"
import BuyButton from "@/app/components/BuyButton"
import Image from "next/image"
import { item } from "@/app/types"

type Props = {
  params: Promise<{ id: string }>
}

const getProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (res.ok) {
    return res.json()
  }
  return Promise.reject('Failed to fetch product')
}


export default async function page(props: Props) {
  const { params } = props
  const id = (await params).id
  const product = await getProduct(id)


  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center my-10  mx-auto w-full md:w-3/4 mt-20">
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <Image
              src={product.image}
              alt="Shoes"
              width={240}
              height={320}
              className="h-80 w-60 object-contain mt-5"
            />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <BackButton />
            <BuyButton item={product} />
          </div>
        </div>
      </div>


    </>
  )
}