"use client"
import { useEffect, useState } from "react";
import { item } from "@/app/types";
import RemoveButton from "../components/RemoveButton";
import Image from "next/image";

export default function CartPage() {
    const [cartItems, setCartItems] = useState<item[]>([]);
    let totalPrice = 0;
    cartItems.forEach((item) => {
        totalPrice += item.price * (item.quantity || 1);
    });

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
    }, []);

    return (
        <div className="p-4 mt-20 border-2 w-full md:w-5/6 mx-auto ">
            <h1 className="text-xl font-bold mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-10 w-10">
                                                        <Image
                                                            src={item.image}
                                                            alt="Image"
                                                            width={20}
                                                            height={20}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.title.slice(0, 20)}...
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{item.category}</span>
                                        </td>
                                        <td>$ {item.price * (item.quantity || 1)}</td>
                                        <td>{item.quantity || 1}</td>
                                        <td>{item.description.slice(0, 20)}...</td>
                                        <td>{item.rating.rate}</td>
                                        <td><RemoveButton item={item} /></td>

                                    </tr>
                                ))
                            }


                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Total Price: ${totalPrice}</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Rating</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
}
