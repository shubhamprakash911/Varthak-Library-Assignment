import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, password, roles } = req.body;
    const newUser = new User({ username, password, roles });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Successfully register a user", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).send("Invalid credentials");
      return;
    }

    const token = jwt.sign({ username: user.username }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.json({ message: "Successfully login", token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
