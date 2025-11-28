import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  stock: number;
  image?: string;
  farmer_id: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String },
  farmer_id: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IProduct>("Product", productSchema);
