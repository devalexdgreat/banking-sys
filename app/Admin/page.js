import Link from "next/link";
import AdminNav from "../components/AdminNav";
import Image from "next/image";
import sendIcon from "@/public/send.png";
import AdminBit from "../components/AdminBit";
import UserInfo from "../components/UserInfo";

const getCards = async () => {
    try {
        const res = await fetch('https://banking-sys.vercel.app/api/cards', {
            cache: 'no-store',
        });
        
        if(!res.ok) {
            throw new Error("Failed to fetch Cards");
        }

        const cards = await res.json();
        console.log("i am all the ", cards);
        return cards;
        

    } catch (error) {
        console.log("Error loading cards: ", error);
    }
};

export default async function Admin() {

    const cardsFound = await getCards();
    console.log("I am the found Guy: ", cardsFound);

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-full">
                <div className="w-11/12 mx-auto my-32">
                    <UserInfo />
                    <div className="w-full mt-12">
                        <div className="bg-gray-200 p-5 rounded-lg">
                            <div className="flex items-center justify-between pt-5">
                                <h1 className="text-xl">Available Balance</h1>
                                <div className="font-bold text-lg">
                                    <span className="leading-5">2,000,000</span>
                                </div> 
                            </div>
                            
                            {/* <div className="flex flex-col md:flex-row gap-6 mt-12">
                                <div className="w-full md:w-6/12">
                                    <div className="flex flex-col md:flex-row gap-2 mb-3">
                                        <label>Select Card</label>
                                        <select>
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
                                                <span className="text-xl font-bold">{cardsFound[0].card_number}</span>
                                            </div>
                                            <h1>{cardsFound[0].holder_name}</h1>
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
                                            <Link href={"/Send"} className="bg-blue-500 py-2 px-4 
                                            rounded-md text-white space-y-2 flex items-center flex-col">
                                                <div className="w-full flex items-center text-center justify-center">
                                                    <Image src={sendIcon} alt="" className="h-12 w-12" />
                                                </div>
                                                <span>Send</span>
                                            </Link>
                                        </div> 
                                    </div>
                                    
                                </div>
                            </div> */}

                            <AdminBit cardsFound={cardsFound}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}