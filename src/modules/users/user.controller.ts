import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User Created Successfully !",
      data: result?.rows[0],
    });
  } catch (err: any) {
    console.error(err.message);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUser();
    res.status(200).json({
      success: true,
      message: "User Fetched Successfully !",
      data: result?.rows,
    });
  } catch (err: any) {
    console.error(err.message);
  }
};

export const userControllers = { createUser, getAllUser };
