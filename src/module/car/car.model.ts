import { model, Schema } from "mongoose";
import { IProduct } from "./car.interface";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the car"],
      minlength: 3,
      maxlength: 100,
    },
    brand: {
      type: String,
      required: [true, "Please provide the brand of the car"],
      minlength: 2,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: [true, "Please provide the price of the car"],
      min: [0, "Price must be a positive number"],
    },
    type: {
      type: String,
      enum: {
        values: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
        message: "{VALUE} is not a valid car type",
      },
      required: [true, "Please specify the type of the car"],
    },
    description: {
      type: String,
      maxlength: 500,
      required: [true, "Please provide a description of the car"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide the quantity of the car"],
      min: [0, "Quantity must be a non-negative number"],
    },
    inStock: {
      type: Boolean,
      required: [true, "Please specify if the car is in stock"],
      default: true,
    },
  },
  { timestamps: true },
);

export const Product = model<IProduct>("Product", productSchema);
