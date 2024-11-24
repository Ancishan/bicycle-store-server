import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const Order = model("Order", orderSchema);
