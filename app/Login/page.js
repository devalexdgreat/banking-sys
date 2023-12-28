import Link from "next/link";
import LoginForm from "../components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Login() {
    const session = await getServerSession(authOptions);

    if (session) redirect('/Admin');
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
                Sign in to Account
              </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <LoginForm />

              <p className="mt-10 text-center text-sm text-gray-500">
                Dont have an Account yet ?{' '}
                <Link href={"/Register"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </>
    );
}