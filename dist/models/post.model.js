"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    created: {
        type: Date,
    },
    mensaje: {
        type: String,
    },
    img: [
        {
            type: String,
        },
    ],
    coords: {
        type: String, //-13.31541, 12.315455
    },
    usuario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, "Debe de existir una referencia a un usuario"],
    },
});
postSchema.pre("save", function (next) {
    this.created = new Date();
    next();
});
exports.Post = (0, mongoose_1.model)("Post", postSchema);
