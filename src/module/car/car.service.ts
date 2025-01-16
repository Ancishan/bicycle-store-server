import { IProduct } from "./car.interface";
import { Product } from "./car.model";

// create bi cycle services
const createCar = async (makecar: IProduct) => {
  // product from car model
  const result = await Product.create(makecar);
  return result;
};

// get cycle services
const getCar = async () => {
  const result = await Product.find();
  return result;
};

// get single car
const singleGetCar = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update car
const updateCar = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

// delete byCycle
const deleteByCar = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const carService = {
  createCar,
  getCar,
  singleGetCar,
  updateCar,
  deleteByCar,
};
