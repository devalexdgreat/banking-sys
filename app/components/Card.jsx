import Link from "next/link";

export default function Card({ data }) {
    return (
        <>
            {data.map((d) => (
            <div key={d._id} className="border rounded-2xl p-3 bg-blue-600 text-white">
                <div className="flex flex-col gap-12 relative group">
                    <div className="w-full flex justify-between">
                        <span>Credit Card</span>
                        <span className="font-bold">NDB</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-400 w-14 h-10 rounded-md"></div>
                        <span className="text-xl font-bold tracking-widest">{d.card_number}</span>
                    </div>
                    <h1>{d.holder_name}</h1>
                    <div className="w-full flex justify-center absolute h-full 
                    items-center gap-4 bg-blue-600 invisible group-hover:visible">
                        <button className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-md">
                            Edit
                        </button>
                        <Link href={"/Setting/hh"} className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-md">
                            Settings
                        </Link>
                        <button className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-md">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            ))}  
        </>
        
    );
}