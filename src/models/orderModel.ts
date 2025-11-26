import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  farmer_id: mongoose.Types.ObjectId;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    farmer_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", orderSchema);
