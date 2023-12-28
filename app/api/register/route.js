import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req) {
    try {
        const { name, email, phone, res_add, pass } = await req.json();
        const hashedPassword = await bcrypt.hash(pass, 10);
        await connectMongoDB();
        await User.create({ name, email, phone, res_add, pass: hashedPassword });

        return NextResponse.json({ message: "User Registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An Error Occured while registering the user" }, { status: 500 });
    }
}