import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/card";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { holder_name, card_number, card_name, w_limit, cvc, card_pin } = await request.json();

    await connectMongoDB();
    const cardCreated = await Card.create({ holder_name, card_number, card_name, 
        w_limit, cvc, card_pin });
    return NextResponse.json({ message: "Card Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const cards = await Card.find();
    return NextResponse.json( cards );
}