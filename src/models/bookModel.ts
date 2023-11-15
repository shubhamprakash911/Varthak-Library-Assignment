import { Document, model, Schema } from "mongoose";

export interface Book extends Document {
  title: string;
  createdAt: Date;
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<Book>("Book", bookSchema);
