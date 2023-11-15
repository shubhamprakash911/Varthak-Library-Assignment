import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send("Unauthorized");
    return;
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key") as {
      username: string;
    };
    const user = await User.findOne({ username: decoded.username });
    if (!user) {
      res.status(401).send("Unauthorized");
      return;
    }
    req.body.user = user;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};
