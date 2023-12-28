"use client";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           const res = await signIn('credentials', {
            email, pass, redirect: false,
           });
           
           if(res.error) {
            setError("Invalid Credentials");
            return;
           }

           router.replace("Admin");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                    <div className="text-red-500 font-bold text-center mt-5">
                    {error}
                    </div>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
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
                    Log in
                  </button>
                </div>
              </form>
    );
}