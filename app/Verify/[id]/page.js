import VerifyForm from "@/app/components/VerifyForm";
import Link from "next/link";

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

const getTrfs = async () => {
  try {
      const res = await fetch('https://banking-sys.vercel.app/api/trfs', {
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

export default async function Verify({ params }) {

    const { id } = params;
    const { card } = await getCardById(id);
    const { holder_name, card_number, card_name, w_limit, cvc, card_pin  } = card;
    console.log("ju si", card._id);

    const trfsFound = await getTrfs();
    console.log("I am the found Guy: ", trfsFound);

    const matchedData = trfsFound.filter(obj => obj.card_id === card._id);
    const realData = matchedData[matchedData.length - 1];
    console.log("hey: ", matchedData);
    console.log("real: ", realData);

    return (
        <>
          {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
          */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="w-full justify-center flex">
                <Link href={"/"} className="text-blue-600 text-2xl font-bold">
                    <span className="flex flex-col text-center">
                        <span className="text-3xl">NDB</span>
                        <span className="text-sm">Noun Digital Bank</span>
                    </span>
                </Link>
              </div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Enter card pin to continue transaction
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <VerifyForm realData={realData} card={card} />
            </div>
          </div>
        </>
    );
}