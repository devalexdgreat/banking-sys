import Link from "next/link";
import AdminNav from "../components/AdminNav";
import Card from "../components/Card";
import UserInfo from "../components/UserInfo";

const getCards = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/cards', {
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

export default async function Cards() {

    const cardsFound = await getCards();
    console.log("I am the found Guy: ", cardsFound);

    return (
        <div className="w-full py-32">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <div className="mb-12">
                    <UserInfo />
                </div>
                <div className="w-full">
                    <div className="flex justify-between mb-6">
                        <h1 className="font-bold text-xl">Cards</h1>
                        <Link href={"/CardForm"} className="py-2 px-4 bg-blue-600 
                        hover:bg-blue-500 text-white rounded-full">Add Card</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card data={cardsFound}/>
                    </div>
                </div>
            </div>
        </div>
    );
}