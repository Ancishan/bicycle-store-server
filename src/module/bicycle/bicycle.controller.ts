import { Request, Response } from "express";
import { Product } from "./bicycle.model";


const createBicycle = async (req: Request, res: Response) => {
   try {
      const makeBicycle = req.body;

      // product from bicycle model
      const result = await Product.create(makeBicycle)
      res.json({
         message: "Bicycle created successfully",
         data: result,
      })
   }
   catch (error) {
      res.json({
         status: false,
         message: " A brief error message explaining what went wrong.",
         error,
      })
   }
}

export const bicycleController = {
   createBicycle
}