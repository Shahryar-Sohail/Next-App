'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AboutPage() {
    console.log("About Page");

    const router = useRouter();
    return (
        <>
            <div>About Us</div>
            <h1>I am about Page</h1>
            <button onClick={() => router.push("/")} className='btn bg-black text-white rounded-2xl p-2 hover:bg-amber-400 hover:text-black cursor-pointer'>Go to Home</button>
        </>
    )
}