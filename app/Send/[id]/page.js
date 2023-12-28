import Link from "next/link";
import AdminNav from "../../components/AdminNav";
import SendForm from "@/app/components/SendForm";

const getCardById = async (id) => {
    try {
        const res = await fetch(`https://banking-sys.vercel.app/api/cards/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Card");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function Send({ params }) {
    const { id } = params;
    const { card } = await getCardById(id);
    const { holder_name, card_number, card_name, w_limit, cvc, card_pin  } = card;
    console.log("ju si", card);

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <SendForm data={card}/>
            </div>
        </div>
    );
}