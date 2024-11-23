import { model, Schema } from 'mongoose';
import { IProduct } from './bicycle.interface';

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please provide the name of the bicycle'],
    minlength: 3,
    maxlength: 100,
  },
  brand: {
    type: String,
    required: [true, 'Please provide the brand of the bicycle'],
    minlength: 2,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: [true, 'Please provide the price of the bicycle'],
    min: [0, 'Price must be a positive number'],
  },
  type: {
    type: String,
    enum: {
      values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      message: '{VALUE} is not a valid bicycle type',
    },
    required: [true, 'Please specify the type of the bicycle'],
  },
  description: {
    type: String,
    maxlength: 500,
    required: [true, 'Please provide a description of the bicycle'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide the quantity of the bicycle'],
    min: [0, 'Quantity must be a non-negative number'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'Please specify if the bicycle is in stock'],
    default: true,
  },
});

export const Product = model<IProduct>('Product', productSchema);
