import {item} from '@/app/types'

const RemoveButton = ({ item }: { item: item }) => {
  
const handleRemove = () =>{
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = existingCart.filter((cartItem: item) => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`Removed product with ID ${item?.id} from cart!`);
    window.location.reload(); // Refresh the page to reflect changes
}
  return (
    <button onClick={handleRemove} className="btn btn-outline btn-secondary">Remove</button>
  )
}

export default RemoveButton