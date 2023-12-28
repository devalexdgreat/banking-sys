import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/card";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const card = await Card.findOne({_id: id});
    return NextResponse.json({ card }, { status: 200 });
}