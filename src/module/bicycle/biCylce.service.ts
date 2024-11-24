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
    return result
}

// get single bicycle
const singleGetCycle = async(id: string) =>{
    const result = await Product.findById(id)
    return result
}

// update bicycle
const updateBicycle = async(id: string, data:IProduct) =>{
    const result = await Product.findByIdAndUpdate(id, data, {
        new:true,
    })
    return result
}

// delete byCycle
const deleteByCycle = async (id: string) =>{
    const result = await Product.findByIdAndDelete(id)
    return result
}

export const biCycleService = {
    createBicycle,
    getCycle,
    singleGetCycle,
    updateBicycle,
    deleteByCycle
}