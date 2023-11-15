"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
// Connect to MongoDB
(0, db_1.default)();
app.get("/", (req, res) => {
    res.send("welcome to Varthak Library Assignment");
});
app.use("/user", userRoutes_1.default);
app.use("/books", bookRoutes_1.default);
exports.default = app;
