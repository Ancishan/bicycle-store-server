import { Router } from "express";
import { bicycleController } from "./bicycle.controller";


const bicycleRouter = Router()

bicycleRouter.post('/create-cycle', bicycleController.createBicycle)
bicycleRouter.get('/get-cycle', bicycleController.getCycle)


export default bicycleRouter