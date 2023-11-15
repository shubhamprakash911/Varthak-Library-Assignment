import { Request, Response, NextFunction } from "express";
import { User } from "../models/userModel";

export const authorizeRoles = (allowedRoles: string[]) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { user } = req.body;
    if (user && user.roles.some((role: any) => allowedRoles.includes(role))) {
      next();
    } else {
      res.status(403).send("Forbidden");
    }
  };
};
