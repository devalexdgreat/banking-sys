import connectMongoDB from "@/libs/mongodb";
import Trf from "@/models/trf";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { bank_name, acct_no, amount, type, card_id } = await request.json();

    await connectMongoDB();
    await Trf.create({ bank_name, acct_no, amount, type, card_id });
    return NextResponse.json({ message: "Trf Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const trfs = await Trf.find();
    return NextResponse.json( trfs );   
}