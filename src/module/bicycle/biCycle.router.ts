import { Router } from "express";
import { bicycleController } from "./bicycle.controller";


const bicycleRouter = Router()

bicycleRouter.post('/create-cycle', bicycleController.createBicycle)


export default bicycleRouter