import AdminNav from "../components/AdminNav";
import TrfCard from "../components/TrfCard";

const getTrfs = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/trfs', {
            cache: 'no-store',
        });
        
        if(!res.ok) {
            throw new Error("Failed to fetch Transfers");
        }

        const trfs = await res.json();
        console.log("i am all the ", trfs);
        return trfs;
        

    } catch (error) {
        console.log("Error loading transfers: ", error);
    }
};

export default async function History() {

    const trfsFound = await getTrfs();
    console.log("I am the found Guy: ", trfsFound);

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto my-32">
                <div className="mb-12">
                    <h1 className="text-2xl font-bold">Transaction History</h1>
                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-5">
                        <TrfCard data={trfsFound}/>
                    </div>
                </div>
            </div>
        </div>
    );
}