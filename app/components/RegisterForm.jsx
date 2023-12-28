"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [res_add, setRes_add] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(!name || !email || !phone || !res_add || !pass) {
        setError("All fields are Necessary!");
        return;
      }

      try {
        const resUserExists = await fetch('api/userExists', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const { user } = await resUserExists.json();

        if(user) {
          setError("User already exists!");
          return;
        }

        const res = await fetch('api/register', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, phone, res_add, pass
          })
        })

        if(res.ok) {
          const form = e.target;
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500
        });
          router.push('/Login');
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration Failed"
          });
          console.log("User registration failed!");
        }

      } catch (error) {
        console.log("Error during registration: ", error);
      }
    };

    return (
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
                Create Account
              </h2>
              {error && (
                <div className="text-red-500 font-bold text-center mt-5">
                  {error}
                </div>
              )}
                

            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
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
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      name="number"
                      type="number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Resendential Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      onChange={(e) => setRes_add(e.target.value)}
                      value={res_add}
                      name="address"
                      type="text"
                      autoComplete="address"
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
                    Create Account
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Already have an Account ?{' '}
                <Link href="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Log in
                </Link>
              </p>
            </div>
          </div>
    );
}