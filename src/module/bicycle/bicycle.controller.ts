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

// get all bicycle
const getCycle = async (req: Request, res: Response) => {
   try {
      const result = await biCycleService.getCycle()
      res.send({
         status: true,
         message: "Cycle getting successfully",
         result
      })

   } catch (error) {
      res.json({
         status: false,
         message: " A brief error message explaining what went wrong.",
         error,
      })
   }
}

// get single bicycle
const getSingleCycle = async (req: Request, res: Response) => {
   try {
      const cycleId = req.params.cycleId
      const result = await biCycleService.singleGetCycle(cycleId)
      res.send({
         status: true,
         message: "Bicycle retrieved successfully",
         result
      })

   } catch (error) {
      res.json({
         status: false,
         message: " A brief error message explaining what went wrong.",
         error,
      })
   }
}

// update biCycle
const updateBicycle = async (req: Request, res: Response) => {
   try {
      const cycleId = req.params.cycleId
      const body = req.body
      const result = await biCycleService.updateBicycle(cycleId, body)
      res.send({
         status: true,
         message: 'Bicycle updated successfully',
         result
      })
   } catch (error) {
      res.json({
         status: false,
         message: 'something went wrong',
         error,
      })
   }
}

// Delete by cycle
const deleteByCycle = async (req: Request, res: Response) => {
   try {
     const cycleId = req.params.cycleId
     await biCycleService.deleteByCycle(cycleId)
 
     res.send({
       status: true,
       message: 'Bicycle deleted successfully',
       result: {},
     })
   } catch (error) {
     res.json({
       status: false,
       message: 'Something went wrong',
       error,
     })
   }
 }

export const bicycleController = {
   createBicycle,
   getCycle,
   getSingleCycle,
   updateBicycle,
   deleteByCycle

}