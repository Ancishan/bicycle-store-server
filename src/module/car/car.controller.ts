import { Request, Response } from "express";
import { carService } from "./car.service";

// create bi Cycle
const createCar = async (req: Request, res: Response) => {
  try {
    const makeCar = req.body;
    // makecar parameter pass into car services
    const result = await carService.createCar(makeCar);

    res.json({
      status: true,
      message: "car created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: " A brief error message explaining what went wrong.",
      error,
    });
  }
};

// get all car
const getCar = async (req: Request, res: Response) => {
  try {
    const result = await carService.getCar();
    res.send({
      status: true,
      message: "Cycle getting successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: " A brief error message explaining what went wrong.",
      error,
    });
  }
};

// get single car
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const cycleId = req.params.cycleId;
    const result = await carService.singleGetCar(cycleId);
    res.send({
      status: true,
      message: "car retrieved successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: " A brief error message explaining what went wrong.",
      error,
    });
  }
};

// update car
const updateCar = async (req: Request, res: Response) => {
  try {
    const cycleId = req.params.cycleId;
    const body = req.body;
    const result = await carService.updateCar(cycleId, body);
    res.send({
      status: true,
      message: "car updated successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "something went wrong",
      error,
    });
  }
};

// Delete by cycle
const deleteByCar = async (req: Request, res: Response) => {
  try {
    const cycleId = req.params.cycleId;
    await carService.deleteByCar(cycleId);

    res.send({
      status: true,
      message: "car deleted successfully",
      result: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const carController = {
  createCar,
  getCar,
  getSingleCar,
  updateCar,
  deleteByCar,
};
