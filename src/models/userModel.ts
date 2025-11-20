import { request } from "http";
import { SecureClientSessionOptions } from "http2";
import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string ;
    phone: string;
}

const UserSchema: Schema = new Schema({
    firstName: {type: String, requied: true},
    lastName: {type: String, requied: true},
    email: {type: String, requied: true, unique: true},
    password: {type: String, requied: true},
    phone: { type: String, requied: true},
},
{timestamps: true}
);

export default mongoose.model<IUser>("User", UserSchema);