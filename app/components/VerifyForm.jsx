"use client";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
import axios from "axios";


export default function VerifyForm({ realData, card }) {

    const [query, setQuery] = useState("");
    const [newBank_name, setNewBank_name] = useState(realData.bank_name);
    const [newAcct_no, setNewAcct_no] = useState(realData.acct_no);
    const [newAmount, setNewAmount] = useState(realData.amount);
    const [newType, setNewType] = useState("Successful");
    const [newCard_id, setNewCard_id] = useState(realData.card_id);
    const [tried, setTried] = useState(0);


    console.log(card);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if(tried === 5) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Transaction Failed"
              });
            router.push("/Admin");
            return;
        } else {
            setTried(tried+1);
            if(!query) {
            alert("Empty, enter card pin");
            return;
            } else if (query !== card.card_pin) {
                alert("wrong pin");
                return;
            } else {
                setNewType("Succesful");

                await axios
                .put(`/api/trfs/${realData._id}`, {
                    newBank_name, newAcct_no, newAmount, newType, newCard_id
                })
                .then(function (response) {
                console.log(response);
                });

                Swal.fire({
                    icon: "success",
                    title: "Transaction Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push("/Admin");
            }
        }

        
        
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Card Pin
                </label>
                <div className="mt-2">
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                />
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 
                text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-blue-600"
                >
                Verify
                </button>
            </div>
            <p className="text-center">
                You have <span className="text-red-600">{tried}</span> Failed Attempts
            </p>
        </form>
    );
}