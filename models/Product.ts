import mongoose, { Document, Schema, Model } from "mongoose";

export interface IProductFeature {
  label: string;
  value: string;
}

export interface IProduct extends Document {
  title: string;
  price: number;
  weight: number;
  img: string;
  images?: string[];
  type: string;
  category?: string;
  seller?: string;
  stock?: number;
  rating?: number;
  comments?: mongoose.Types.ObjectId[];
  questionsCount?: number;
  weights?: number[];
  features?: IProductFeature[];
  description?: string;
  specs?: IProductFeature[];
  createdAt: Date;
  updatedAt: Date;
}

const featureSchema = new Schema<IProductFeature>(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: undefined,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    seller: {
      type: String,
    },
    stock: {
      type: Number,
      min: 0,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    comments: {
      type: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
      default: [],
    },
    questionsCount: {
      type: Number,
      min: 0,
      default: 0,
    },
    weights: {
      type: [Number],
      default: undefined,
    },
    features: {
      type: [featureSchema],
      default: undefined,
    },
    description: {
      type: String,
    },
    specs: {
      type: [featureSchema],
      default: undefined,
    },
  },
  { timestamps: true }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;