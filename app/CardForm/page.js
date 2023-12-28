"use client";
import Link from "next/link";
import AdminNav from "../components/AdminNav";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CardFrom() {

    const [holder_name, setHolder_name] = useState("");
    const [card_number, setCard_number] = useState("");
    const [card_name, setCard_name] = useState("");
    const [w_limit, setW_limit] = useState("");
    const [cvc, setCvc] = useState("");
    const [card_pin, setCard_pin] = useState("");
    // const [exp_fst, setExp_fst] = useState("");
    // const [exp_sec, setExp_sec] = useState("");
    // const [exp_date, setExp_date] = useState("");

    const router = useRouter();
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if(!holder_name || !card_number || card_number.length < 16 || card_number.length > 16 || !w_limit || 
          !cvc || cvc.length < 3 || cvc.length > 3 || !card_pin || card_pin.length !== 4 ) {
            alert('Error! fill all inputs appropriately');
            return;
        }

        try {
            const res = await fetch('api/cards', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ holder_name, card_number, card_name, w_limit, cvc, card_pin }),
            });

            if(res.ok) {
                const data = await res.json();
                console.log("Card Created: ", data);
                router.push('/Cards');
                router.refresh();
            } else {
                throw new Error('Failed to create Card!');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
                Add Card to Secure
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setHolder_name(e.target.value)}
                      onKeyUp={(e) => setCard_name(`${holder_name}'s card`)}
                      value={holder_name}
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Card Number
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setCard_number(e.target.value)}
                      value={card_number}
                      id="cdn"
                      name="card number"
                      type="number"
                      autoComplete="address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Card Withdrawal Limit
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setW_limit(e.target.value)}
                      value={w_limit}
                      id="password"
                      name="password"
                      type="number"
                      autoComplete="address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      CVC
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setCvc(e.target.value)}
                        value={cvc}
                        id="password"
                        name="password"
                        type="number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                        focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Card Pin
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setCard_pin(e.target.value)}
                        value={card_pin}
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                        focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                      />
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Expiry Date
                    </label>
                    <div className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                        ring-inset ring-gray-300 focus:ring-2 focus:ring-inset 
                        focus:ring-blue-600 flex gap-1 px-1">
                      <input
                        onChange={(e) => setExp_fst(e.target.value)}
                        value={exp_fst}
                        id="password"
                        name="password"
                        type="number"
                        autoComplete="address"
                        maxLength={"2"}
                        className="w-full text-right outline-none"
                      />
                      <div>
                        <span>/</span>
                      </div>
                      <input
                        onChange={(e) => setExp_sec(e.target.value)}
                        pattern='d\+\.\d\d$'
                        value={exp_sec}
                        id="password"
                        name="password"
                        type="number"
                        autoComplete="address"
                        className="w-full outline-none"
                      />
                    </div>
                    <input
                        onChange={(e) => setExp_date(e.target.value)}
                        value={exp_date}
                        id="password"
                        name="password"
                        type="date"
                        autoComplete="address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                        focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                      />
                  </div> */}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 
                    text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-blue-600"
                  >
                    Add Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
    );
}