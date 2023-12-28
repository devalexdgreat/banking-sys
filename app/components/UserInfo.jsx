"use client";
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const { data: session } = useSession();

    return (
        <div className="w-full">
            <h1 className="text-xl md:text-3xl font-bold">Welcome, {session?.user?.name}</h1>
        </div>
    );
}