import mongoose, { Document, Schema, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  company: string;
}

const schema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: [2000, "پیام نباید بیشتر از ۲۰۰۰ کاراکتر باشد"],
    },
    company: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // createdAt و updatedAt خودکار
  }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", schema);

export default Contact;