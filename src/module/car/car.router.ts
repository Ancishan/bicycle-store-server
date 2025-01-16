import { Router } from "express";
import { carController } from "./car.controller";

const carRouter = Router();

carRouter.post("/create-car", carController.createCar);
carRouter.get("/get-all", carController.getCar);
carRouter.get("/:productId", carController.getSingleCar);
carRouter.put("/:productId", carController.updateCar);
carRouter.delete("/:productId", carController.deleteByCar);

export default carRouter;
