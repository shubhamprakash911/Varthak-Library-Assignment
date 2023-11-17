import { Document, model, Schema } from "mongoose";
import mongoose from "mongoose";
export interface Book extends Document {
  title: string;
  createdAt: Date;
  user: mongoose.Types.ObjectId;
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default model<Book>("Book", bookSchema);
