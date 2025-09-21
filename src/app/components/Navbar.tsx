'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




export default function Navbar() {
    const items = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Products",
            url: "/products"
        },
        {
            name: "Cart",
            url: "/cart"
        }
    ]

    const pathname = usePathname();
    return (
        <>
            <div>
                <div className="navbar bg-yellow-200/90 shadow-sm  fixed z-10 top-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {items.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.url}
                                            className={pathname === item.url ? "text-amber-600 font-bold" : ""}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                       
                    </div>
                    <div className="navbar-center hidden lg:flex -ml-20">
                        <ul className="menu menu-horizontal px-1">
                            {items.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.url}
                                        className={pathname === item.url ? "text-amber-600 font-bold" : ""}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>

        </>
    )
}