"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewNewBooks = exports.viewOldBooks = exports.viewBooksByUser = exports.viewBooks = exports.createBook = void 0;
const bookModel_1 = __importDefault(require("../models/bookModel"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const newBook = new bookModel_1.default({ title });
        yield newBook.save();
        res.status(201).json(newBook);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.createBook = createBook;
const viewBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.default.find();
        res.status(200).json(books);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.viewBooks = viewBooks;
const viewBooksByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.default.find({ user: req.body.user._id });
        res.status(200).json(books);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.viewBooksByUser = viewBooksByUser;
const viewOldBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        const oldBooks = yield bookModel_1.default.find({ createdAt: { $lte: tenMinutesAgo } });
        res.status(200).json(oldBooks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.viewOldBooks = viewOldBooks;
const viewNewBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        const newBooks = yield bookModel_1.default.find({ createdAt: { $gt: tenMinutesAgo } });
        res.status(200).json(newBooks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.viewNewBooks = viewNewBooks;
