import mongoose, { Document, Schema, Model } from "mongoose";

export interface IComment extends Document {
  username: string;
  body: string;
  email: string;
  score: number;
  isAccept: boolean;
  date: Date;
  productID?: mongoose.Types.ObjectId;
}

const schema = new Schema<IComment>({
  username: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 5,
  },
  isAccept: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Comment: Model<IComment> =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", schema);

export default Comment;