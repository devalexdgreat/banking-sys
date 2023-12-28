import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full fixed top-0 bg-white">
            <div className="w-11/12 mx-auto flex justify-between items-center py-4">
                <Link href={"/"} className="text-blue-600 text-2xl font-bold">
                    <span className="flex flex-col">
                        <span className="text-3xl">NDB</span>
                        <span className="text-sm">Noun Digital Bank</span>
                    </span>
                </Link>
                <div className="hidden gap-12 items-center md:flex">
                    <Link href={"/"} className="hover:text-blue-600 duration-700">Home</Link>
                    <Link href={"#features"} className="hover:text-blue-600 duration-700">About Us</Link>
                    <Link href={"#about"} className="hover:text-blue-600 duration-700">Features</Link>
                    
                </div>
                <Link href={"/Register"} className="bg-blue-600 text-white px-4 py-2 rounded-full 
                    hover:bg-blue-700 duration-700">Sign in</Link>
            </div>
        </div>
    );
}