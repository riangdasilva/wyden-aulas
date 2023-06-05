import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secretKey } from "../config";

export function login(req: Request, res: Response) {
  const { username, password } = req.body;
  if (username !== "admin" || password !== "admin") {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }

  const payload = { username: req.body.username };
  const token = jwt.sign(payload, secretKey);
  res.json({
    "access_token": token,
  });
}

export function register(req: Request, res: Response) {
  res.send("register");
}
