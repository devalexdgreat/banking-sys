import connectMongoDB from "@/libs/mongodb";
import Trf from "@/models/trf";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;

    const { newBank_name: bank_name, newAcct_no: acct_no, newAmount: amount, newType: type, 
        newCard_id: card_id } = await request.json();

    await connectMongoDB();

    await Trf.findByIdAndUpdate(id, { bank_name, acct_no, amount, type, card_id });

    return NextResponse.json({ message: "Transfer Info Updated!" }, { status: 200 });
}

