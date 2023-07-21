import { NextFunction, Request, Response } from "express";

async function authentication(req: Request, res: Response, next: NextFunction) {
  // const { token } = req.query || req.body;
  // if (!token) {
  //   res.status(403).json({ error: "Token is required" });
  //   return;
  // }
  // if (token != "12345") {
  //   res.status(400).json({ error: "Token is required" });
  //   return;
  // }
  // if (token === "12345") next();
  next();
}

export default authentication;
