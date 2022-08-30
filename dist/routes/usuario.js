"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_model_1 = require("../models/usuario.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRoutes = (0, express_1.Router)();
// userRoutes.get("/prueba", (req: Request, resp: Response) => {
//   resp.json({
//     ok: true,
//     mensaje: "Todo funciona bien!",
//   });
// });
userRoutes.post("/create", (req, resp) => {
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        avatar: req.body.avatar,
    };
    usuario_model_1.Usuario.create(user)
        .then((userDB) => {
        resp.json({
            ok: true,
            user: userDB,
        });
    })
        .catch((err) => {
        resp.json({
            ok: false,
            err,
        });
    });
});
exports.default = userRoutes;
