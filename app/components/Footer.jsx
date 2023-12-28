import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full py-6 bg-blue-600 text-white">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row text-center md:text-left 
            justify-between items-center gap-5 md:gap-0">
                <Link href={"/"} className="">
                    <span className="flex flex-col">
                        <span className="text-3xl">NDB</span>
                        <span className="text-sm">Noun Digital Bank</span>
                    </span>
                </Link>
                <div>
                    Copyright &copy; 2022 NDBANK All rights reserved
                </div>
            </div>
        </div>
    );
}