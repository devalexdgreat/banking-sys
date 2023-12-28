import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema(
    {
        holder_name: String,
        card_number: String,
        card_name: String,
        w_limit: String,
        cvc: String,
        card_pin: String
    },
    {
        timestamps: true,
    }
);

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;