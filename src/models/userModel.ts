import { Document, model, Schema } from "mongoose";

export interface User extends Document {
  username: string;
  password: string;
  roles: string[];
}

const userSchema = new Schema<User>({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, enum: ["CREATOR", "VIEWER", "VIEW_ALL"] }],
});

export default model<User>("User", userSchema);
