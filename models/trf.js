import mongoose, { Schema } from "mongoose";

const trfSchema = new Schema(
    {
        bank_name: String,
        acct_no: String,
        amount: String,
        type: String,
        card_id: String
    },
    {
        timestamps: true,
    }
);

const Trf = mongoose.models.Trf || mongoose.model("Trf", trfSchema);

export default Trf;