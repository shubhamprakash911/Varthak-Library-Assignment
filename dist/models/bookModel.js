"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});
exports.default = (0, mongoose_1.model)("Book", bookSchema);
