import { Router } from "express";
import { bicycleController } from "./bicycle.controller";

const bicycleRouter = Router();

bicycleRouter.post("/create-cycle", bicycleController.createBicycle);
bicycleRouter.get("/get-all", bicycleController.getCycle);
bicycleRouter.get("/:productId", bicycleController.getSingleCycle);
bicycleRouter.put("/:productId", bicycleController.updateBicycle);
bicycleRouter.delete("/:productId", bicycleController.deleteByCycle);

export default bicycleRouter;
