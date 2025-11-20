import mongoose, {Schema, Document} from "mongoose";

export interface IRole extends Document {
    name: string;
    decription?: string;
}

const roleSchema = new Schema<IRole> ({
    name: { type: String, required: true, unique: true},
    decription: { type: String},
});

export default mongoose.model<IRole> ("Role", roleSchema);