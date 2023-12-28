"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function AdminNav() {

    const [open, setOpen] = useState(false);
    // const [openedStyle, setOpenedStyle] = useState(0.95);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="w-full fixed top-0 bg-white">
            <div className="w-11/12 mx-auto flex justify-between items-center py-4">
                <Link href={"/"} className="text-blue-600 text-2xl font-bold">
                    <span className="flex flex-col">
                        <span className="text-3xl">NDB</span>
                        <span className="text-sm">Noun Digital Bank</span>
                    </span>
                </Link>
                <div className="hidden gap-12 items-center md:flex">
                    <Link href={"/Admin"} className="hover:text-blue-600 duration-700">Home</Link>
                    <Link href={"/Cards"} className="hover:text-blue-600 duration-700">Cards</Link>
                    <Link href={"/History"} className="hover:text-blue-600 duration-700">History</Link>
                    <button onClick={() => signOut()} className="bg-blue-600 text-white px-4 py-2 rounded-full 
                    hover:bg-blue-700 duration-700">Log out</button>
                </div>
                <button onClick={toggleMenu} className="block md:hidden border-blue-500 border-b-2 
                font-bold text-blue-500">
                    Menu
                </button>
            </div>
            {open && (
                <div className="w-full bg-white border-t md:hidden">
                    <div className="w-full mx-auto flex">
                    <div className="w-11/12 mx-auto justify-between py-3 gap-8 flex items-center">
                        <div className="flex flex-col gap-6">
                            <Link href={"/Admin"} className="hover:text-blue-600 duration-700">Home</Link>
                            <Link href={"/Cards"} className="hover:text-blue-600 duration-700">Cards</Link>
                            <Link href={"/History"} className="hover:text-blue-600 duration-700">History</Link>
                            <button onClick={() => signOut()} className="bg-blue-600 hover:bg-blue-500 
                            text-white py-2 px-6
                            rounded-lg">Log out</button>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}