import mongoose, {Schema, Document} from "mongoose";

export interface IUserRole extends Document {
    user_id: mongoose.Types.ObjectId;
    role_id: mongoose.Types.ObjectId;
    description?: string;
}

const userRoleSchema = new Schema<IUserRole> ({
    user_id: { type: Schema.Types.ObjectId, ref: "User", requied: true},
    role_id: { type: Schema.Types.ObjectId, ref: "Role", required: true},
    description: {type: String},
},
{timestamps: true});

export default mongoose.model<IUserRole>("UserRole", userRoleSchema);

