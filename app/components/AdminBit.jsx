"use client";
import Image from "next/image";
import Link from "next/link";
import sendIcon from "@/public/send.png";
import { useState } from "react";

export default function AdminBit({ cardsFound }) {
    const [cardIs, setCardIs] = useState("yes");
    if(cardsFound.length > 0) {
        
    }
     
    const [card, setCard] = useState(`${cardsFound[0].card_name}`);
    const [fil, setFil] = useState([cardsFound[0]]);

    const handleSelect = (e) => {
        setCard(e.target.value);
        let filtered = cardsFound.filter(scard => scard.card_name.includes(e.target.value));
        setFil(filtered);
    }
    console.log("card: ", card);
    console.log("Filtered Card : ", fil);

    return (
        <div className="flex flex-col md:flex-row gap-6 mt-12">
            {cardIs && (
            <>
                <div className="w-full md:w-6/12">
                <div className="flex flex-col md:flex-row gap-2 mb-3">
                    <label>Select Card</label>
                    <select
                    onChange={handleSelect}
                    value={card}
                    >
                        {cardsFound.map((c) => (
                            <option key={c._id}>{c.card_name}</option>
                        ))}
                    </select>
                </div>
                <div className="border rounded-2xl p-3 bg-blue-600 text-white w-full md:w-8/12">
                    <div className="flex flex-col gap-12 relative group">
                        <div className="w-full flex justify-between">
                            <span>Credit Card</span>
                            <span className="font-bold">NDB</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="bg-yellow-400 w-14 h-10 rounded-md"></div>
                            <span className="text-xl font-bold">{fil[0].card_number}</span>
                        </div>
                        <h1>{fil[0].holder_name}</h1>
                        <div className="w-full flex justify-center absolute h-full 
                        items-center gap-4 bg-blue-600 invisible group-hover:visible">
                            <button className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-md">
                                Edit
                            </button>
                            <Link href={"/Setting/hhh"} className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-md">
                                Settings
                            </Link>
                            <button className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-md">
                                Remove
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="w-full md:w-6/12 flex items-end">
                <div className="flex items-start flex-col justify-start">
                    <div>
                        <h1 className="mb-4 font-bold">Services</h1>
                    </div>
                    <div className="w-full flex gap-2">
                        <Link href={`/Send/${fil[0]._id}`} className="bg-blue-500 py-2 px-4 
                        rounded-md text-white space-y-2 flex items-center flex-col">
                            <div className="w-full flex items-center text-center justify-center">
                                <Image src={sendIcon} alt="" className="h-12 w-12" />
                            </div>
                            <span>Send</span>
                        </Link>
                    </div> 
                </div>
                
            </div>
            </>
            )}
            
        </div>
    );
}