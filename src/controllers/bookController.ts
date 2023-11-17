// bookController.ts
import { Request, Response } from "express";
import Book from "../models/bookModel";

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.body;
    const newBook = new Book({ title, user: req.body.user._id });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const viewBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const viewBooksByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const books = await Book.find({ user: req.body.user._id });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const viewOldBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const oldBooks = await Book.find({ createdAt: { $lte: tenMinutesAgo } });
    res.status(200).json(oldBooks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const viewNewBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const newBooks = await Book.find({ createdAt: { $gt: tenMinutesAgo } });
    res.status(200).json(newBooks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
