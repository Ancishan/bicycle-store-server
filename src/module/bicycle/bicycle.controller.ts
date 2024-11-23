import { Request, Response } from "express";
import { Product } from "./bicycle.model";
import { biCycleService } from "./biCylce.service";

// create bi Cycle 
const createBicycle = async (req: Request, res: Response) => {
   try {
      const makeBicycle = req.body;
      // makeBicycle parameter pass into biCycle services
      const result = await biCycleService.createBicycle(makeBicycle)

      res.json({
         status: true,
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

const getCycle = async(req:Request, res:Response) =>{
   try{
      const result = await biCycleService.getCycle()
      res.send({
         status: true,
         message: "Cycle getting successfully",
         result
      })

   } catch(error){
      res.json({
         status: false,
         message: " A brief error message explaining what went wrong.",
         error,
      })
   }
}


export const bicycleController = {
   createBicycle,
   getCycle
}