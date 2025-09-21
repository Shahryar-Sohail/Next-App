"use client"
import { item } from "@/app/types"




function BuyButton({ item }: { item: item }) {
  
  const handleBuy = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (existingCart.find((cartItem: item) => cartItem.id === item.id)) {
      item.quantity = (item.quantity || 1) + 1
      const updatedCart = existingCart.map((cartItem: item) =>
        cartItem.id === item.id ? { ...cartItem, quantity: item.quantity } : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`Increased quantity of product with ID ${item?.id} to ${item.quantity}`);
      return;
    }
    const updatedCart = [...existingCart, item];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`Product with ID ${item?.id} added to cart!`);
  }

  return (
    <button onClick={handleBuy} className="btn btn-primary" >Buy Now</button>
  )
}

export default BuyButton