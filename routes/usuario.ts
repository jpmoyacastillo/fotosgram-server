import { Router, Request, Response } from "express";
import { Usuario } from "../models/usuario.model";
import bcrypt from "bcrypt";

const userRoutes = Router();

// userRoutes.get("/prueba", (req: Request, resp: Response) => {
//   resp.json({
//     ok: true,
//     mensaje: "Todo funciona bien!",
//   });
// });

userRoutes.post("/create", (req: Request, resp: Response) => {
  const user = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar,
  };

  Usuario.create(user)
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

export default userRoutes;
