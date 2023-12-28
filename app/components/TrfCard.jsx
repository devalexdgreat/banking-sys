export default function TrfCard({ data }) {

    return (
        <>
            {data.map((d) => (
                <div key={d._id} className="bg-blue-200 py-4 px-2 rounded-md flex flex-col gap-3">
                    <span className="flex justify-between">
                        <span className="font-bold">Transfer to {d.bank_name}</span>
                        <span className="font-bold">#{d.amount} Naira</span>
                    </span>
                    <span className="flex justify-between">
                        <span>{d.createdAt}</span>
                        <span>{d.type}</span>
                    </span>
                </div>
                ))}  
        </>
    );
}