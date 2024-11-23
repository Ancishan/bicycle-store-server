import { IProduct } from "./bicycle.interface";
import { Product } from "./bicycle.model"

// create bi cycle services 
const createBicycle = async (makeBicycle: IProduct) => {
    // product from bicycle model
    const result = await Product.create(makeBicycle)
    return result;
}

// get cycle services
const getCycle = async() =>{
    const result = await Product.find()
    return result;
}

export const biCycleService = {
    createBicycle,
    getCycle
}